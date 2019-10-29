const updateCartItems = (cartItems, newItem, idx) => {
  if (newItem.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, newItem];
  } else {
    return [...cartItems.slice(0, idx), newItem, ...cartItems.slice(idx + 1)];
  }
};

const updateCartItem = (item = {}, book, quantity) => {
  const { id = book.id, title = book.title, total = 0, count = 0 } = item;

  return {
    id,
    title,
    total: total + quantity * book.price,
    count: count + quantity
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems, totalPrice, totalItems }
  } = state;

  const book = books.find(book => book.id === bookId);
  const idx = cartItems.findIndex(book => book.id === bookId);
  const item = cartItems[idx];

  let newItem = updateCartItem(item, book, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, idx),
    totalPrice: totalPrice + quantity * book.price,
    totalItems: totalItems + quantity
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      totalPrice: 0,
      totalItems: 0
    };
  }

  switch (action.type) {
    case "ADD_BOOK_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "DELETE_BOOK_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "DELETE_ALL_BOOKS_FROM_CART":
     
      const item = state.shoppingCart.cartItems.find(book => book.id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
