import React, { useState, useEffect } from 'react'
import './App.css'

import Search from './components/Search'
import Movies from './components/Movies'
import { searchMovies } from './services/movies.services'

function App() {
  const [searchResult, setSearchResult] = useState()
  const [searchParams, setSearchParams] = useState({
    search: '',
    page: 1,
  })

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.search) {
        setSearchResult(
          await searchMovies(searchParams.search, searchParams.page),
        )
      }
    }

    fetchData()
  }, [searchParams])

  const handleSubmitSearch = searchInput => {
    // Find search and reset page to 1
    setSearchParams({ search: searchInput, page: 1 })
  }

  return (
    <div className="App">
      <Search handleSubmit={handleSubmitSearch} />
      <Movies searchResult={searchResult} />
    </div>
  )
}

export default App
