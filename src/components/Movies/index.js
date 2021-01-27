import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ChevronLeft } from '../../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../chevron-right.svg'
import Movie from '../Movie'

const Movies = ({ searchResult }) => {
  return !searchResult ? (
    <p>No results yet</p>
  ) : (
    <div className="search-results">
      <div className="chevron">
        <ChevronLeft />
      </div>
      <div className="search-results-list">
        {searchResult.Search.map(result => (
          <Movie key={result.imdbID} {...result} />
        ))}
      </div>
      <div className="chevron">
        <ChevronRight />
      </div>
    </div>
  )
}

Movies.propTypes = {
  searchResult: PropTypes.shape({
    totalResults: PropTypes.string,
    Search: PropTypes.array,
    Response: PropTypes.oneOf(['True', 'False']),
  }),
}

export default Movies
