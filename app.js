// Function to generate random athlete data
function generateRandomAthlete() {
    const names = [
        'Cristiano Ronaldo', 'Lionel Messi', 'Neymar Jr.', 'Robert Lewandowski', 'Mohamed Salah',
        'Kylian Mbappe', 'Kevin De Bruyne', 'Harry Kane', 'Erling Haaland', 'Sadio Mane'
        // Add more footballers or athletes as needed
    ];

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
