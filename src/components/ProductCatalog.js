import React, { useState } from 'react';
import productsData from './../components/productsData';

const ProductCatalog = ({ addToCart }) => {
  return (
    <div className="product-catalog">
      {productsData.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
