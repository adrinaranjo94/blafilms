import React from 'react'
import PropTypes from 'prop-types'

import Movie from '../Movie'

import { checkChevronLeft, checkChevronRight } from '../../utils/movies.utils'

import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg'

const Movies = ({ searchResult, page, searchInput, changePage }) => {
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
    <div className="search-notification">
      {searchInput ? (
        <p>
          No results with <b>{searchInput}</b>
        </p>
      ) : (
        <p>Find any movie / serie / game on the search bar</p>
      )}
    </div>
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
  searchResult: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      totalResults: PropTypes.string,
      Search: PropTypes.array,
      Response: PropTypes.oneOf(['True', 'False']),
    }),
  ]),
  page: PropTypes.number,
  changePage: PropTypes.func,
}

export default Movies
