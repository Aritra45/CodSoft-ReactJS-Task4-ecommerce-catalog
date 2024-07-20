import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{calculateTotal()}</h3>
    </div>
  );
};

export default ShoppingCart;
