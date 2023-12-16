// Fetch athletes from the backend and populate the dropdown
async function populateAthletesDropdown() {
    const response = await fetch('http://localhost:3000/api/athletes');
    const athletes = await response.json();

    const playerSelect = document.getElementById('playerSelect');
    playerSelect.innerHTML = '<option value="">Select Player</option>';

    athletes.forEach(athlete => {
        const option = document.createElement('option');
        option.value = athlete.name;
        option.textContent = athlete.name;
        playerSelect.appendChild(option);
    });
}

// Fetch and display performances for the selected player
async function showPlayerPerformance() {
   
