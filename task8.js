const movieData = require('./moviedata.json')
//console.log('movieData', movieData)

movieData.map(movie => {
  movie.Year = Number (movie.Year)
  movie.imdbRating = +movie.imdbRating
  movie.imdbVotes = +(movie.imdbVotes.replace(/,/g,""))
  movie.Actors = movie.Actors.split(", ")
})

//console.log("movie", movieData)
//Functions

function findBestRating (array) {
  return array.reduce((previousValue, currentValue) => {
    if (previousValue.imdbRating > currentValue.imdbRating) {
      return previousValue
  } else {
    return currentValue
    }
  })
}

function findMostRated (array) {
  return array.reduce((previousValue, currentValue) => {
    if (previousValue.imdbVotes > currentValue.imdbVotes) {
      return previousValue
  } else {
    return currentValue
    }
  }) 
}

console.log("Ex 1")
const moviesBetween = movieData.filter(movie => {
if (movie.Year >= 1962 && movie.Year <= 1972){
  return movie
  }
})

//console.log("moviesbetween", moviesBetween)

const bestRating = moviesBetween.reduce((previousValue, currentValue) => {
  if (previousValue.imdbRating > currentValue.imdbRating) {
    return previousValue
} else {
  return currentValue
  }
})
//console.log("bestRating", bestRating)

const mostRated = moviesBetween.reduce((previousValue, currentValue) => {
  if (previousValue.imdbVotes > currentValue.imdbVotes) {
    return previousValue
} else {
  return currentValue
  }
})
//console.log("mostRated", mostRated)

let bestRatingString = "Best rated movie is "
bestRatingString += bestRating.Title
bestRatingString += ", directed by "
bestRatingString += bestRating.Director
bestRatingString += " and was released in "
bestRatingString += bestRating.Released + "."

console.log(bestRatingString)

let mostRatedString = "Most rated movie is "
mostRatedString += mostRated.Title
mostRatedString += ", directed by "
mostRatedString += mostRated.Director
mostRatedString += " and was released in "
mostRatedString += mostRated.Released + "."

console.log(mostRatedString)

console.log("Ex 2")

const movieDrama = movieData.filter(movie => {
  if (movie.Genre.includes("Drama")) {
      return movie
  }
})

const bestRatingDrama = findBestRating(movieDrama)
//console.log("Drama", movieDrama)
//console.log("bestRatingDrama", bestRatingDrama)

const mostRatedDrama = findMostRated(movieDrama)
//console.log("mostRatedDrama", mostRatedDrama)

let bestRatingDramaString = "Best rated drama is "
bestRatingDramaString += bestRatingDrama.Title
bestRatingDramaString += ", directed by "
bestRatingDramaString += bestRatingDrama.Director
bestRatingDramaString += " and was released in "
bestRatingDramaString += bestRatingDrama.Released + "."

console.log(bestRatingDramaString)

let mostRatedDramaString = "Most rated drama is "
mostRatedDramaString += mostRatedDrama.Title
mostRatedDramaString += ", directed by "
mostRatedDramaString += mostRatedDrama.Director
mostRatedDramaString += " and was released in "
mostRatedDramaString += mostRatedDrama.Released + "."

console.log (mostRatedDramaString)

console.log("Ex 3")

const ratedR = movieData.filter(movie => {
  if (movie.Rated=== "R") {
      return movie
    }
  })
//console.log("ratedR", ratedR)

const ratedRTitles = ratedR.map(movie => {
  return movie.Title
})

//console.log("ratedRTitles", ratedRTitles)

let ratedRString = "Movies that are rated R are: "
ratedRString +=ratedRTitles.join(", ") + "."

console.log(ratedRString)

let actors = []
  ratedR.map(movie => {
    movie.Actors.map(actor => {
      actors.push(actor)
    })
  })

//console.log("actors", actors)

let uniqueActors = [...new Set(actors)];
//console.log(uniqueActors)

let actorString = "Actors that played in those movies: "
actorString += uniqueActors.join(", ") + "."
console.log(actorString)

