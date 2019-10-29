import React from 'react';
import ReactDOM from 'react-dom';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store} >
    <BookstoreServiceProvider value={bookstoreService}>
      <Router>
        <App />
      </Router>
    </BookstoreServiceProvider>
  </Provider>, 
document.getElementById('root'));