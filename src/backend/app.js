const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getFilms = require('./films');

// Add route -> request and response
app.get('/api/films', (req, res) => res.send(getFilms()));

// app.get(`api/films/:id`, (req, res) => {
//     res.send(getFilms().find(film => film.id === req.params.id));
// })          

app.get(`/api/films/:id`, (req, res) => {
    res.send(JSON.stringify(getFilms()));
})

app.listen(port, () => console.log(`Server started on port ${port}!`));

// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});   