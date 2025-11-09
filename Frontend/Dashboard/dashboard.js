document.addEventListener('DOMContentLoaded', () => {
    const moodCardValue = document.querySelector('.mood-card .card-value');
    const streakCardValue = document.querySelector('.streak-card .card-value');
    const moodChartCtx = document.getElementById('moodChart').getContext('2d');
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    async function fetchMoodHistory() {
        try {
            const token = localStorage.getItem('token'); 
            const res = await fetch('/api/v1/dashboard/mood', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!res.ok) throw new Error('Failed to fetch mood data');
            const result = await res.json();

            const data = result.data;

            if (data.length) {
                const todayMood = data[data.length - 1].averageMood;
                moodCardValue.textContent = todayMood;
            }

            const streak = calculateStreak(data);
            streakCardValue.textContent = `${streak} days`;

            renderMoodChart(data);

        } catch (error) {
            console.error('Error fetching mood data:', error);
        }
    }

    function calculateStreak(data) {
        let streak = 0;
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].averageMood != null) streak++;
            else break;
        }
        return streak;
    }

    function renderMoodChart(data) {
        const labels = data.map(entry => entry.date);
        const values = data.map(entry => entry.averageMood);

        new Chart(moodChartCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Mood',
                    data: values,
                    borderColor: '#59168B',
                    backgroundColor: 'rgba(89,22,139,0.2)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { min: 0, max: 5 }
                }
            }
        });
    }

    fetchMoodHistory();
});
