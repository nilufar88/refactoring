'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
       personalMovieDB.count = +prompt('How mny movies have you watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you seen?', '');
    }
},

rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What is your last watched film?', '');
              b = prompt('How would you evaluate it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
},
detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        console.log('Too less');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('The classic watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log('The fan');
    } else {
        console.log('There is an error');
    }
},
showMyDB: function(hidden) {
    if (!hidden) {
       console.log(personalMovieDB);
    }
},
toggleVisibleMyDB: function() {
    if (personalMovieDB.private) {
        personalMovieDB.private = false;
    } else {
        personalMovieDB.private = true;
    }
},
writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Your favourite genre number ${i}`);
        
        if (genre === '' || genre == null) {
            console.log('You typed incorrect data');
            i--;
        } else {
            personalMovieDB[i - 1] = genre;
            }     
}

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre ${i + 1} - is ${item}`);
        });
}
};