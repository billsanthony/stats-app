// Function to search for an athlete by name
async function searchAthlete() {
    const searchInput = document.getElementById('searchInput');
    const athleteName = searchInput.value.trim();

    if (athleteName === '') {
        alert('Please enter an athlete\'s name.');
        return;
    }

    const response = await fetch(`http://localhost:3000/api/athletes/search?name=${encodeURIComponent(athleteName)}`);
    const athletes = await response.json();

    const performanceList = document.getElementById('performanceList');
    performanceList.innerHTML = '';

    const performanceTableBody = document.getElementById('performanceTableBody');
    performanceTableBody.innerHTML = '';

    athletes.forEach(athlete => {
        // Display in a div
        const athleteDiv = document.createElement('div');
        athleteDiv.innerHTML = `<strong>${athlete.name}</strong> - ${athlete.performance.metric}: ${athlete.performance.value}`;
        performanceList.appendChild(athleteDiv);

        // Display in a table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${athlete.name}</td>
            <td>${athlete.performance.metric}</td>
            <td>${athlete.performance.value}</td>
        `;
        performanceTableBody.appendChild(row);
   
