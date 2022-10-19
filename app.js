const express = require("express");
const path = require("path")

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'accueil.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'portfolio.html'));
});

app.listen(process.env.PORT || 8080);