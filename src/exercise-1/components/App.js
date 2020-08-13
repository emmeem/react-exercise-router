import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Redirect, Route, Link, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import MyProfile from '../pages/MyProfile';
import AboutUs from '../pages/AboutUs';
import Products from '../../exercise-2/pages/Products'
import ProductDetails from '../../exercise-2/pages/ProductDetails'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Link to="/" className="Header">Home</Link>
          <Link to="/products" className="Header">Products</Link>
          <Link to="/my-profile" className="Header">My Profile</Link>
          <Link to="/about-us" className="Header">About Us</Link>
         <Switch>
           <Route path="/products/:id"  component={ProductDetails} />
           <Route exact path="/products"  component={Products} />
           <Redirect from='/goods' to='/products' />
           <Route exact path="/my-profile" component={MyProfile} />
           <Route exact path="/about-us" component={AboutUs} />
           <Route path="/" component={Home} />
         </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
