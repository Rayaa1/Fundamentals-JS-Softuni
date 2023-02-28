function movies(array) {
    let movies = [];

    array.forEach((el) => {
        if (el.includes("addMovie")) {
            let movie = el.split("addMovie ")[1];
            movies.push({ name: movie });
        } else if (el.includes("directedBy")) {
            let [currentMovie, director] = el.split(" directedBy ");

            movies.forEach((obj) => {
                if (obj.name === currentMovie) {
                    obj.director = director;
                }
            });
        } else if (el.includes("onDate")) {
            let [currentMovie, date] = el.split(" onDate ");

            movies.forEach((obj) => {
                if (obj.name === currentMovie) {
                    obj.date = date;
                }
            });
        }
    });

    movies.forEach((obj) => {
        if (obj.name && obj.director && obj.date) {
            console.log(JSON.stringify(obj));
        }
    });
}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])
