// Function to generate random athlete data
function generateRandomAthlete() {
    const names = ['Cristiano Ronaldo', 'Lionel Messi', 'LeBron James', 'Serena Williams', 'Usain Bolt'];
    const metrics = ['Goals', 'Assists', 'Points', 'Aces', 'Sprints'];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
    const randomValue = Math.floor(Math.random() * 10) + 1;

    return {
        name: randomName,
        performance: {
            metric: randomMetric,
            value: randomValue
        }
    };
}

// Function to show random performances in tabular form
async function showRandomPerformances() {
    const randomAthlete = generateRandomAthlete();

    const performanceList = document.getElementById('performanceList');
    performanceList.innerHTML = '';

    const performanceTableBody = document.getElementById('performanceTableBody');
    performanceTableBody.innerHTML = '';

    // Display in a div
    const athleteDiv = document.createElement('div');
    athleteDiv.innerHTML = `<strong>${randomAthlete.name}</strong> - ${randomAthlete.performance.metric}: ${randomAthlete.performance.value}`;
    performanceList.appendChild(athleteDiv);

    // Display in a table
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${randomAthlete.name}</td>
        <td>${randomAthlete.performance.metric}</td>
        <td>${randomAthlete.performance.value}</td>
    `;
    performanceTableBody.appendChild(row);
}
