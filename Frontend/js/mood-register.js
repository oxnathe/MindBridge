const moodCards = document.querySelectorAll('.mood-card');
const moodForm = document.querySelector('.mood-form');
const noteInput = document.getElementById('mood-note');
const moodHistoryList = document.querySelector('.history-list');
const moodInsightText = document.querySelector('#mood-insight p');

let selectedMood = null;

moodCards.forEach(card => {
    card.addEventListener('click', () => {
        moodCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        selectedMood = parseInt(card.dataset.mood);
        selectedLabel = card.dataset.label; 
        console.log('Selected mood:', selectedLabel, `(${selectedMood})`);
    });
});

function getMoodEmoji(mood) {
  switch (mood) {
    case 5: return '😄'; 
    case 4: return '😊'; 
    case 3: return '😐'; 
    case 2: return '😞'; 
    case 1: return '😣'; 
    default: return '';
  }
}

function addMoodToHistory(entry) {
  const item = document.createElement('div');
  item.classList.add('history-item');

  item.innerHTML = `
    <div class="history-item__icon-wrapper">${getMoodEmoji(entry.mood)}</div>
    <div class="history-item__details">
      <div class="history-item__header">
        <span class="mood-name">${entry.label}</span>
        <span class="date">${entry.date}</span>
      </div>
      <p class="note">${entry.note || ''}</p>
    </div>
  `;

  moodHistoryList.prepend(item);
}

function updateMoodInsight(entry) {
  if (entry.mood >= 4) {
    moodInsightText.textContent = "You're feeling good! Keep it up!";
  } else {
    moodInsightText.textContent = "Take care of yourself. Things will get better!";
  }
}

moodForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!selectedMood) {
        alert('Please select a mood before saving.');
        return;
    }

    const note = noteInput.value.trim();
    const token = localStorage.getItem('token');
    const submitBtn = moodForm.querySelector('button[type="submit"]');
    const feedback = document.getElementById('mood-feedback');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Saving...';

    try {
        const response = await fetch('https://mindbridge-snlz.onrender.com/api/v1/mood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ mood: selectedMood, note })
        });

        if (!response.ok) {
            const text = await response.text();
            console.error('Server error:', text);
            alert('Failed to save mood. Please try again later.');
            return;
        }

        const data = await response.json();

        addMoodToHistory({
    ...data.moodEntry,
    label: selectedLabel 
});
updateMoodInsight({
    ...data.moodEntry,
    label: selectedLabel
});

        noteInput.value = '';

        feedback.textContent = 'Mood saved successfully!';
        setTimeout(() => feedback.textContent = '', 3000);

    } catch (err) {
        console.error('Fetch error:', err);
        alert('Cannot reach server. Please check your connection.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save Mood';
    }
});
