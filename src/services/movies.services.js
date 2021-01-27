const searchMovies = async (search, page) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${search}&page=${page}`,
  )

  const data = await response.json()

  if (data.Response === 'True') {
    return data
  } else {
    return false
  }
}

export { searchMovies }
