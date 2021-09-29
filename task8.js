const moviedata = require('./moviedata.json')
//console.log('moviedata', moviedata)

//Ex 1

//Ex 2
const movieDrama = moviedata.filter((p) => {
  if (p.Genre.includes("Drama")) {
      return p
  }
})
//console.log('Drama', movieDrama)

//Ex 3
function ratedR (Rated) {
    return moviedata.filter((movie) => {
      return movie.Rated === Rated
    })
  }
  console.log(ratedR("R"))


