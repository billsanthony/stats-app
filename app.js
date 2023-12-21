// Add this code to your app.js

// Function to show random performances in tabular form
async function showRandomPerformances() {
    try {
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
    } catch (error) {
        console.error('Error showing random performances:', error);
    }
}
const Athlete = mongoose.model('Athlete', athleteSchema);

// Function to generate random athlete data
function generateRandomAthlete() {
    const names = ['Cristiano Ronaldo', 'Lionel Messi', 'Neymar Jr.', 'Robert Lewandowski', 'Mohamed Salah'];
    const metrics = ['Goals', 'Assists', 'Points', 'Aces', 'Sprints'];

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

// Function to get a random value based on the metric
function getRandomValue(metric) {
    switch (metric) {
        case 'Goals':
            return Math.floor(Math.random() * 30) + 1; // Random goals between 1 and 30
        case 'Assists':
            return Math.floor(Math.random() * 20) + 1; // Random assists between 1 and 20
        case 'Points':
            return Math.floor(Math.random() * 100) + 1; // Random points between 1 and 100
        case 'Aces':
            return Math.floor(Math.random() * 50) + 1; // Random aces between 1 and 50
        case 'Sprints':
            return Math.floor(Math.random() * 200) + 1; // Random sprints between 1 and 200
        default:
            return Math.floor(Math.random() * 10) + 1; // Default random value between 1 and 10
    }
}

// Fetch real footballer data from the Football Data API
async function fetchRealFootballerData() {
    try {
        const response = await fetch('https://api.football-data.org/v2/competitions/PL/scorers?limit=10', {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'your_api_key', // Replace with your actual API key
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        // Adapt the response to fit the athlete data structure
        const adaptedData = data.scorers.map((scorer) => ({
            name: scorer.player.name,
            performance: {
                metric: 'Goals',
                value: scorer.numberOfGoals,
            },
        }));
