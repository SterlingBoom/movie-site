import React from 'react'

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280'
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 6) {
    return 'orange'
  } else {
    return 'red'
  }
}
const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
  return (
    <div className='movie'>
      <span className='released'>Release Date: {release_date}</span>
      <img
        src={IMAGE_API + poster_path}
        alt={title}
        style={{ marginTop: '5px' }}
      />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className='movie-over'>
        <h2>Overview: </h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie
