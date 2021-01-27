import React from 'react'
import PropTypes from 'prop-types'

import Movie from '../Movie'

import { ReactComponent as ChevronLeft } from '../../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../chevron-right.svg'
import { checkChevronLeft, checkChevronRight } from '../../utils/movies.utils'

const Movies = ({ searchResult, page, changePage }) => {
  const handleChangePage = type => {
    switch (type) {
      case 'increment':
        checkChevronRight(page, searchResult.totalResults) &&
          changePage(page + 1)
        break
      case 'decrement':
        checkChevronLeft(page) && changePage(page - 1)
        break
      default:
        break
    }
  }
  return !searchResult ? (
    <p>No results yet</p>
  ) : (
    <div className="search-results">
      <div className="chevron">
        {checkChevronLeft(page) && (
          <ChevronLeft onClick={() => handleChangePage('decrement')} />
        )}
      </div>
      <div className="search-results-list">
        {searchResult.Search.map(result => (
          <Movie key={result.imdbID} {...result} />
        ))}
      </div>
      <div className="chevron">
        {checkChevronRight(page, searchResult.totalResults) && (
          <ChevronRight onClick={() => handleChangePage('increment')} />
        )}
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
