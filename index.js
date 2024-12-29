const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://mongodb:27017/yourDatabaseName');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a schema and model for emails
const emailSchema = new mongoose.Schema({
    email: String
});
const Email = mongoose.model('Email', emailSchema);

// Serve the index.html file and fetch emails
app.get('/', async (req, res) => {
    try {
        const emails = await Email.find();
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Email App</title>
            </head>
            <body>
                <h1>Email App</h1>
                <form action="/add-email" method="post">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <button type="submit">Submit</button>
                </form>
                <h2>Stored Emails</h2>
                <ul>
                    ${emails.map(email => `<li>${email.email}</li>`).join('')}
                </ul>
            </body>
            </html>
        `);
    } catch (err) {
        res.status(500).send('Error fetching emails.');
    }
});

// Handle POST request to /add-email
app.post('/add-email', async (req, res) => {
    try {
        const newEmail = new Email({ email: req.body.email });
        await newEmail.save();
        res.status(200).send('Email saved successfully.');
    } catch (err) {
        res.status(500).send('Error saving email.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
