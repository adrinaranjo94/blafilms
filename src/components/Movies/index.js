import React from 'react'
import PropTypes from 'prop-types'

import Movie from '../Movie'

import {
  canDecreasePagination,
  canIncreasePagination,
} from '../../utils/movies.utils'

import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg'

const Movies = ({ searchResult, page, searchInput, changePage }) => {
  const handleChangePage = action => {
    switch (action) {
      case 'increase':
        changePage(page + 1)
        break
      case 'decrease':
        changePage(page - 1)
        break
      default:
        break
    }
  }

  if (!searchResult) {
    return (
      <div className="search-notification">
        {searchInput ? (
          <p>
            No results with <b>{searchInput}</b>
          </p>
        ) : (
          <p>Find any movie / serie / game on the search bar</p>
        )}
      </div>
    )
  }

  return (
    <div className="search-results">
      <div className="chevron">
        {canDecreasePagination(page) && (
          <ChevronLeft onClick={() => handleChangePage('decrease')} />
        )}
      </div>
      <div className="search-results-list">
        {searchResult.Search.map((result, index) => (
          <Movie key={`${result.imdbID}${index}`} {...result} />
        ))}
      </div>
      <div className="chevron">
        {canIncreasePagination(page, searchResult.totalResults) && (
          <ChevronRight onClick={() => handleChangePage('increase')} />
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
