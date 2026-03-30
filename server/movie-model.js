/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

   movies = {
        tt12345678: {
      "imdbID": "tt12345678",
      "Title":"The Godfather",
      "Released":"1972-03-24",
      "Runtime":175,
      "Genres":["Crime", "Drama"],
      "Directors":["Francis Ford Coppola"],
      "Writers":["Mario Puzo", "Francis Ford Coppola"],
      "Actors":["Marlon Brando", "Al Pacino", "James Caan"],
      "Plot":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":100,
      "imdbRating":9.2
    },
     tt12344321: {"imdbID": "tt12344321",
      "Title":"It",
    "Released":"2017-09-08",
    "Runtime":135,
    "Genres":["Horror"],
    "Directors":["Andy Muschietti"],
    "Writers":["Chase Palmer", "Cary Joji Fukunaga", "Gary Dauberman"],
    "Actors":["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"],
    "Plot":"In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore":69,
    "imdbRating":7.3
  },
    tt12341234: 
    {"imdbID": "tt12341234",
      "Title":"Scarface",
    "Released":"1983-12-09",
    "Runtime":170,
    "Genres":["Crime", "Drama"],
    "Directors":["Brian De Palma"],
    "Writers":["Oliver Stone","Howard Hawks", "Ben Hecht"],
    "Actors":["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"],
    "Plot":"In the 1980s, a determined criminal-minded Cuban immigrant becomes the biggest drug smuggler in Miami, and is eventually undone by his own drug addiction.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_SX300.jpg",
    "Metascore":65,
    "imdbRating":8.3
  }
}

  module.exports = {movies};