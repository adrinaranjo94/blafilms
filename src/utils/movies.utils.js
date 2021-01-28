const canDecreasePagination = actualPage => {
  return actualPage > 1
}

const canIncreasePagination = (actualPage, totalResults) => {
  return Math.ceil(totalResults / 10) > actualPage
}

export { canDecreasePagination, canIncreasePagination }
