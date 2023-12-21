const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB setup (replace 'your_database_url' with your actual MongoDB connection string)
mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const athleteSchema = new mongoose.Schema({
    name: String,
    performance: {
        metric: String,
        value: Number
    }
});

const Athlete = mongoose.model('Athlete', athleteSchema);

// Fetch random athlete data from Sports Open Data API
async function fetchRandomAthleteData() {
    try {
        const response = await fetch('https://sportsop-soccer-sports-open-data-v1.p.rapidapi.com/v1/leagues/premier-league/seasons/21-22/teams',
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'sportsop-soccer-sports-open-data-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'your_rapidapi_key'
                }
            });

        const data = await response.json();
        const randomTeam = data[Math.floor(Math.random() * data.length)];
        const randomAthlete = {
            name: randomTeam.name,
            performance: {
                metric: 'Goals',
                value: Math.floor(Math.random() * 10) + 1
            }
        };

        return randomAthlete;
    } catch (error) {
        console.error('Error fetching random athlete data:', error);
        throw error;
    }
}

// API endpoint to get random athlete data
app.get('/api/athletes/random', async (req, res) => {
    try {
        const randomAthlete = await fetchRandomAthleteData();
        res.json([randomAthlete]);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint to search for an athlete by name
app.get('/api/athletes/search', async (req, res) => {
    const athleteName = req.query.name;

    if (!athleteName) {
        return res.status(400).json({ error: 'Please provide an athlete\'s name for search.' });
    }

    try {
        const athletes = await Athlete.find({ name: new RegExp(athleteName, 'i') });
        res.json(athletes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
