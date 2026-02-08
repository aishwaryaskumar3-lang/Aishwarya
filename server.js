// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New Contact Form Submission:
  Name: ${name}
  Email: ${email}
  Message: ${message}`);
  res.send('<h2>Thank you! Your message has been received.</h2><a href="/">Go Back</a>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
