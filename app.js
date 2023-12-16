// Sample data structure to store athlete performances
let performances = [];

function addPerformance() {
    const athleteName = document.getElementById('athleteName').value;
    const performanceMetric = document.getElementById('performanceMetric').value;

    // Basic validation
    if (!athleteName || !performanceMetric) {
        alert('Please enter both athlete name and performance metric.');
        return;
    }

    // Create a performance object
    const performance = {
        athlete: athleteName,
        metric: performanceMetric,
        date: new Date().toLocaleDateString()
    };

    // Add performance to the list
    performances.push(performance);

    // Display performances
    displayPerformances();

    // Clear input fields
    document.getElementById('athleteName').value = '';
    document.getElementById('performanceMetric').value = '';
}

function displayPerformances() {
    const performanceList = document.getElementById('performanceList');
    performanceList.innerHTML = '';

    performances.forEach(performance => {
        const performanceItem = document.createElement('div');
        performanceItem.innerHTML = `<strong>${performance.athlete}</strong> - ${performance.metric} (${performance.date})`;
        performanceList.appendChild(performanceItem);
    });
}
