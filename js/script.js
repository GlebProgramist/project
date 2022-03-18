"use strict";

let numberOfFilms = prompt("Количество просмотреных фильмов", "Число");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const lastFilm = prompt("Последний фильм", ""),
    mark = prompt("Оценка", ""),
    lastFilm2 = prompt("Последний фильм", ""),
    mark2 = prompt("Оценка", "");
personalMovieDB.movies[lastFilm] = mark;
personalMovieDB.movies[lastFilm2] = mark2;
console.log(personalMovieDB);
