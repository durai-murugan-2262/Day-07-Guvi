class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    if (this.rating === undefined) {
      this.rating = "PG";
    }
  }
  getPG(movie) {
    let newArray = [];
    for (let i of movie) {
      if (i.rating === "PG") {
        newArray.push(i);
      }
    }
    return newArray;
  }
}

const film1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const film = new Movie("Casino", "DM");
let pgRatingFilms = film.getPG([film1, film]);
console.log(pgRatingFilms);
