const express = require("express");
const path = require("path")

const app = express();

const sendResponse = (response, fileToSend) => {
    response.sendFile(path.join(__dirname, 'views', fileToSend + '.html'));
};

app.get('/', (req, res) => {
    sendResponse(res, 'accueil');
});
app.get('/about', (req, res) => {
    sendResponse(res, 'about');
});
app.get('/portfolio', (req, res) => {
    sendResponse(res, 'portfolio');
});

app.listen(process.env.PORT || 8080);