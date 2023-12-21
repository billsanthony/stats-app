// Existing code...

// Function to show random performances for the new tab
async function showNewTabPerformances() {
    try {
        const randomAthlete = generateNewTabRandomAthlete();

        const performanceList = document.getElementById('performanceList');
        performanceList.innerHTML = '';

        const performanceTableBody = document.getElementById('performanceTableBody');
        performanceTableBody.innerHTML = '';

        // Display in a table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${randomAthlete.name}</td>
            <td>${randomAthlete.performance.metric}</td>
            <td>${randomAthlete.performance.value}</td>
        `;
        performanceTableBody.appendChild(row);
    } catch (error) {
        console.error('Error showing new tab performances:', error);
    }
}

// Function to generate random athlete data for the new tab
function generateNewTabRandomAthlete() {
    const names = ['Usain Bolt', 'Serena Williams', 'Michael Phelps', 'Simone Biles', 'Floyd Mayweather'];
    const metrics = ['Gold Medals', 'Grand Slam Titles', 'Olympic Golds', 'Championships', 'Undefeated Matches'];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
    const randomValue = getRandomValue(randomMetric);

    return {
        name: randomName,
        performance: {
            metric: randomMetric,
            value: randomValue
        }
    };
}

// Existing code...
