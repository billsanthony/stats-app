// Your existing app.js code...

// Function to search for an athlete by name, sport category, and gender
async function searchAthlete() {
    const athleteName = document.getElementById('athleteName').value;
    const sportCategory = document.getElementById('sportCategory').value;
    const gender = document.getElementById('gender').value;

    // Your existing logic for searching athletes goes here...

    try {
        // Your logic for searching athletes based on the entered criteria...

        // Display the results in the UI...
    } catch (error) {
        console.error('Error searching for athletes:', error);
    }
}
