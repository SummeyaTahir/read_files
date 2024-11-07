const express = require('express');
const { readItems } = require('./files.js'); // Make sure this matches the export

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server is working! Access /users to get the user list.');
});

app.get('/users', async (req, res) => {
    try {
        const users = await readItems();
        res.json(users);
    } catch (error) {
        console.error("Error in /users endpoint:", error);
        res.status(500).json({ error: "Failed to retrieve user list." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
