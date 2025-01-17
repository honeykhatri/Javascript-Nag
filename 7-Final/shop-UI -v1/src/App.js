import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import store from './store';
import { loadProducts } from './actions/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      products: []
    };
  }
  renderProductItems() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (<Product key={idx}
        product={item}
        onBuy={(item) => { this.addToCart(item) }} />);
    })
  }
  renderProducts() {
    return (
      <div className="list-group">
        {this.renderProductItems()}
      </div>
    )
  }
  componentDidMount() {
    let state = store.getState();
    let products = state.products;
    let cart = state.cart;
    this.setState({ products, cart });
    store.subscribe(() => {
      let state = store.getState();
      let products = state.products;
      let cart = state.cart;
      this.setState({ products, cart });
    });
    setTimeout(() => {
      store.dispatch(loadProducts());
    }, 1000);
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand" to="/">shopIT</Link>
              <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    <i className="fa fa-sign-in"></i>Login
                  </Link>
                </li>
              </ul>
            </nav>
            <hr />
            <i className="fa fa-shopping-cart"></i>
            <span>&nbsp;{Object.keys(this.state.cart).length} item(s) in cart </span>
            |
            <Link className="" to="/">View Products</Link>
            <Link className="pull-right" to="cart">View cart</Link>
            <hr />

            <Route exact path="/"
              render={() => this.renderProducts()} />
            <Route path="/cart"
              render={() => <ViewCart cart={this.state.cart} />} />
            <Route path="/login" component={Login} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
