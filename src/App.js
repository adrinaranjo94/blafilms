import React, { useState, useEffect } from 'react'
import './App.css'

import Search from './components/Search'
import Movies from './components/Movies'

function App() {
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    const search = async () => {
      const response = await fetch(
        'http://www.omdbapi.com/?apikey=a461e386&s=king',
      )

      const data = await response.json()

      if (!searchResult) {
        setSearchResult(data)
      }
    }

    search()
  })

  const handleSubmitSearch = searchInput => {
    // Find search and reset page to 1
    console.log(searchInput)
  }

  return (
    <div className="App">
      <Search handleSubmit={handleSubmitSearch} />
      <Movies searchResult={searchResult} />
    </div>
  )
}

export default App
