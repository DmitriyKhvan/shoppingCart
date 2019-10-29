const bookRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUSTED'
  }
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  }
}

const addBookToCart = (bookId) => {
  return {
    type: 'ADD_BOOK_TO_CART',
    payload: bookId
  }
}

const deleteBookFromCart = (bookId) => {
  return {
    type: 'DELETE_BOOK_FROM_CART',
    payload: bookId
  }
}

const deleteAllBooksFromCart = (bookId) => {
  return {
    type: 'DELETE_ALL_BOOKS_FROM_CART',
    payload: bookId
  }
}

const fetchBooks = (dispatch, bookstoreService) => {
  dispatch(bookRequested());
  bookstoreService.getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => dispatch(booksError(err)));
}

export {
  fetchBooks,
  addBookToCart,
  deleteBookFromCart,
  deleteAllBooksFromCart
}