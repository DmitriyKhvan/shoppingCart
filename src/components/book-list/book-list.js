import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks, addBookToCart } from "../../actions";
import ErrorIndicator from "../error-indicator";
import withBookStoreService from "../hoc";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import "./book-list.css";

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="books list-group">
      {books.map(book => {
        return (
          <li key={book.id} className="book list-group-item">
            <BookListItem
              book={book}
              onAddToCart={() => onAddToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContent extends Component {
  componentDidMount() {
    // const {
    //         bookstoreService,
    //         booksLoaded,
    //         bookRequested,
    //         booksError} = this.props;
    // bookRequested();
    // bookstoreService.getBooks()
    //     .then((data) => booksLoaded(data))
    //     .catch((err) => booksError(err));

    this.props.fetchBooks();
  }

  render() {
    console.log("render");
    const { books, loading, error, onAddToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    //console.log(books);
    return (
      <div className="row">
        <BookList books={books} onAddToCart={onAddToCart} />
      </div>
    );
  }
}

const mapStoreToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    // bookRequested: () => dispatch(bookRequested()),
    // booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks)),
    // booksError: (error) => dispatch(booksError(error)),
    fetchBooks: () => fetchBooks(dispatch, bookstoreService),
    onAddToCart: id => dispatch(addBookToCart(id))
  };
};

export default withBookStoreService()(
  connect(
    mapStoreToProps,
    mapDispatchToProps
  )(BookListContent)
);
