const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(express.static('public'));

// Dummy Athletes Data (Replace with MongoDB)
const topAthletes = generateTopAthletes();

// API Endpoint to Fetch Top Athletes
app.get('/api/top-athletes', (req, res) => {
    res.json(topAthletes);
});

// Function to generate top athlete data
function generateTopAthletes() {
    return [
        { name: 'Cristiano Ronaldo', sport: 'Football', gender: 'Male', age: 36 },
        { name: 'Lionel Messi', sport: 'Football', gender: 'Male', age: 34 },
        { name: 'Serena Williams', sport: 'Tennis', gender: 'Female', age: 40 },
        { name: 'Usain Bolt', sport: 'Track and Field', gender: 'Male', age: 35 },
        { name: 'Simone Biles', sport: 'Gymnastics', gender: 'Female', age: 24 },
        { name: 'LeBron James', sport: 'Basketball', gender: 'Male', age: 37 },
        { name: 'Roger Federer', sport: 'Tennis', gender: 'Male', age: 40 },
        { name: 'Tom Brady', sport: 'American Football', gender: 'Male', age: 44 },
        { name: 'Naomi Osaka', sport: 'Tennis', gender: 'Female', age: 24 },
        { name: 'Novak Djokovic', sport: 'Tennis', gender: 'Male', age: 34 },
    ];
}

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
