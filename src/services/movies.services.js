const searchMovies = async (search, page) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=a461e386&s=${search}&page=${page}`,
  )

  const data = await response.json()

  console.log(data)

  if (data.Response === 'True') {
    return data
  } else {
    return false
  }
}

export { searchMovies }
