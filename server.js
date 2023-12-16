const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/athlete_app', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Athlete Schema
const athleteSchema = new mongoose.Schema({
  name: String,
  sport: String,
  team: String,
  position: String,
  performances: [{
    metric: String,
    value: Number,
    date: Date,
  }],
});

const Athlete = mongoose.model('Athlete', athleteSchema);

app.use(bodyParser.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing

// API endpoint to get all athletes
app.get('/api/athletes', async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.json(athletes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to add a new athlete
app.post('/api/athletes', async (req, res) => {
  const newAthlete = req.body;

  try {
    const createdAthlete = await Athlete.create(newAthlete);
    res.json(createdAthlete);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Additional API endpoints for updates, authentication, etc.

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
