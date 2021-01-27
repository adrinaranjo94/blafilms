import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSubmit }) => {
  const [searchInput, setSearchInput] = useState('')
  const handleInputChange = e => {
    setSearchInput(e.target.value)
  }
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          handleSubmit(searchInput)
        }}
      >
        Search
      </button>
    </div>
  )
}

Search.propTypes = {
  handleSubmit: PropTypes.func,
}

export default Search
