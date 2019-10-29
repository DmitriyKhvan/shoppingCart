import React from "react";
import { connect } from "react-redux";
import {
  addBookToCart,
  deleteBookFromCart,
  deleteAllBooksFromCart
} from "../../actions";
import "./cart-page.css";

const CartPage = ({ cartItems, onIncrease, onDecrease, onDelete }) => {
  console.log(cartItems);
  return (
    <table className="table table-striped cartItems">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Count</th>
          <th scope="col">Total</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, idx) => {
          const { id, title, total, count } = item;
          return (
            <tr key={id}>
              <th scope="row">{idx + 1}</th>
              <td>{title}</td>
              <td>{count}</td>
              <td>${total}</td>
              <td className="buttons">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(id)}
                >
                  <i className="fa fa-trash-o" />
                </button>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => onIncrease(id)}
                >
                  <i className="fa fa-plus-circle" />
                </button>
                <button
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => onDecrease(id)}
                >
                  <i className="fa fa-minus-circle" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    cartItems
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDelete: (id) => dispatch(deleteAllBooksFromCart(id)),
//     onDecrease: (id) => dispatch(deleteBookFromCart(id)),
//     onIncrease: (id) => dispatch(addBookToCart(id))
//   }
// }

//The same
const mapDispatchToProps = {
  onDelete: deleteAllBooksFromCart,
  onDecrease: deleteBookFromCart,
  onIncrease: addBookToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
