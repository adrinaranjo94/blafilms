import React from 'react'
import PropTypes from 'prop-types'
import placeholderImg from '../../assets/images/placeholder.png'

const Movie = ({ imdbID, Poster, Title, Type, Year }) => {
  return (
    <div key={imdbID} className="search-item">
      <img src={Poster === 'N/A' ? placeholderImg : Poster} alt="poster" />
      <div className="search-item-data">
        <div className="title">{Title}</div>
        <div className="meta">{`${Type} | ${Year}`}</div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  imdbID: PropTypes.string,
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
}

export default Movie
