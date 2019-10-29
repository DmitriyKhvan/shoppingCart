import React from "react";
import './book-list-item.css';

const BookListItem = ({book,onAddToCart}) => {

    const {title, author, coverImage, price} = book;
    return(
      <React.Fragment>
        <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button 
          className="btn btn-info add-to-cart"
          onClick={onAddToCart}
          >
          Add To Cart
        </button>
      </div>
      </React.Fragment>
    )
  };

export default BookListItem;
