// Add this API endpoint to search for an athlete by name
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

// Rest of the code...
