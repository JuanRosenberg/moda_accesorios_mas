// src/components/Cart.js
import React, { useMemo } from 'react';

function Cart({ cart }) {
  const total = useMemo(() => {
    return cart.reduce((total, product) => total + product.price, 0);
  }, [cart]);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Cart;