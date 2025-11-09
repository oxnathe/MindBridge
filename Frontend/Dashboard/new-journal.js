const journalForm = document.querySelector('.journal__form');
const titleInput = document.getElementById('title');
const messageInput = document.getElementById('message');
const saveButton = journalForm.querySelector('.btn--primary');

journalForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const content = messageInput.value.trim();

    if (!title || !content) {
        alert('Please fill in both title and content.');
        return;
    }

    saveButton.textContent = 'Saving...';
    saveButton.disabled = true;

    const token = localStorage.getItem('token'); 

    try {
        const response = await fetch('https://mindbridge-snlz.onrender.com/api/v1/journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                content,
                emotionTags: [] 
            })
        });

        if (!response.ok) {
            const text = await response.text();
            console.error('Server error:', text);
            alert('Failed to save journal. Please try again.');
            return;
        }

        const data = await response.json();
        console.log('Journal saved:', data.journalEntry);

        alert('Journal Entry saved successfully!');

        titleInput.value = '';
        messageInput.value = '';

    } catch (err) {
        console.error('Fetch error:', err);
        alert('Cannot reach server. Check your connection.');
    } finally {
        saveButton.textContent = 'Save Entry';
        saveButton.disabled = false;
    }
});
