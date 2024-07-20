import React, { useState } from 'react';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <ProductCatalog addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
