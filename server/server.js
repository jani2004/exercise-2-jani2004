const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  const movieArray = [];

  Object.values(movieModel.movies).forEach(element => {
    movieArray.push(element);
  });

  res.json(movieArray);
});

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;

  const movie = movieModel.movies[id];

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
});

app.put('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const newMovie = req.body;

  const movieArray = Object.values(movieModel.movies);

  let index = 0;

  movieArray.forEach((element, i) => {
    if (id === element.imdbID) {
      index = i;
    }
  });

  if (index > 0) {
    movieArray[index] = newMovie;
    res.sendStatus(200);
  } else {
    movieArray.push(newMovie);
    res.sendStatus(201);
  }

  movieModel.movies = Object.fromEntries(
    movieArray.map(m => [m.imdbID, m])
  );
});


app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

