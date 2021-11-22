import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

// import { createStructuredSelector } from 'reselect';
import Homepage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import { render } from 'node-sass';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }


  render(){
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={shopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
      </div>
    );
  }
  
}

export default App;
