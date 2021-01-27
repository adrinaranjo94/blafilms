const checkChevronLeft = actualPage => {
  return actualPage > 1
}

const checkChevronRight = (actualPage, results) => {
  return Math.ceil(results / 10) > actualPage
}

export { checkChevronLeft, checkChevronRight }
