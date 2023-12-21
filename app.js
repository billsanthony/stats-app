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
    });

    // Show or hide the table based on whether there are performances
    const performanceTable = document.getElementById('performanceTable');
    performanceTable.style.display = athletes.length > 0 ? 'table' : 'none';
}

// Rest of the code...

// Styling for better appearance
document.getElementById('app').style.textAlign = 'center';
document.getElementById('app').style.marginTop = '50px';
document.getElementById('app').style.padding = '20px';
document.getElementById('app').style.border = '1px solid #ccc';
document.getElementById('app').style.borderRadius = '10px';
document.getElementById('app').style.maxWidth = '600px';
document.getElementById('app').style.margin = 'auto';

document.getElementById('searchInput').style.marginRight = '10px';
document.getElementById('searchInput').style.padding = '5px';

document.getElementById('performanceTable').style.width = '100%';
document.getElementById('performanceTable').style.marginTop = '20px';
document.getElementById('performanceTable').style.borderCollapse = 'collapse';

document.getElementById('performanceTable th, #performanceTable td').style.border = '1px solid #ddd';
document.getElementById('performanceTable th, #performanceTable td').style.padding = '8px';
document.getElementById('performanceTable th').style.backgroundColor = '#f2f2f2';
document.getElementById('performanceTable th').style.textAlign = 'left';
