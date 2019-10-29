import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./store-header.css";

const StoreHeader = ({ totalPrice, totalItems }) => {
  return (
    <div className="row store-header">
      <div className="store-logo">
        <Link to="/">ReStore</Link>
      </div>
      <div className="store-cart">
        <Link to="/cart">
          <i className="cart-icon fa fa-shopping-cart" />
        </Link>
        {totalItems} Items (${totalPrice})
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { totalPrice, totalItems } }) => {
  return {
    totalItems,
    totalPrice
  };
};

export default connect(mapStateToProps)(StoreHeader);
