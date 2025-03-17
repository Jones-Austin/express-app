const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory - MUST BE BEFORE ROUTES
app.use(express.static('public'));

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Hello, 2025! (New route)
app.get('/hello', (req, res) => {
    res.send('<h1>Hello, 2025!</h1>');
  });

// About page route
app.get('/about', (req, res) => {
    res.send('This is a simple Express application for learning purposes.');
});

// Contact page route (with form)
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <form method="GET" action="/submit-contact">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="contact">Other Contact:</label>
                <input type="text" id="contact" name="contact">
            </div>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Form submission
app.get('/submit-contact', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const contact = req.query.contact;

    // Construct the response message
    const responseMessage = `Thank you, ${name}! We have received your message. Email: ${email}, Other Contact: ${contact}`;

    res.send(responseMessage);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});