// Existing code...

// Function to show random performances in tabular form
async function showRandomPerformances() {
    try {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * 2); // Either 0 or 1

        let randomAthlete;
        if (randomIndex === 0) {
            // Use existing random athlete data generation
            randomAthlete = generateRandomAthlete();
        } else {
            // Fetch real footballer data from the Football Data API
            randomAthlete = await fetchRealFootballerData();
        }

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

// Existing code...
