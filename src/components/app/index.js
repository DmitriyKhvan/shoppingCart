import React from "react";
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import StoreHeader from '../store-header';

const App = () => {

  return (
    <div className='container'>
      <StoreHeader />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/cart" component={CartPage} />
        <Route render={() => <h2>Page not found!</h2>} />
      </Switch>
    </div>
  );
};

export default App;
