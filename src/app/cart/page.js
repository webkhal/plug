// app/cart/page.js

'use client';
import { useState } from 'react';

export default function CartPage() {
  // Static dummy cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Designer Buttons - Gold',
      price: 399,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Authentic Cotton Kurti',
      price: 1399,
      quantity: 1,
    },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ marginTop: '2rem' }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: '1px solid #ccc',
                padding: '1rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price} × {item.quantity}</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => removeItem(item.id)} style={{ marginLeft: '1rem', color: 'red' }}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: '2rem', fontWeight: 'bold' }}>
            <p>Total: ₹{total}</p>
            <a href="/checkout">
              <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                marginTop: '1rem'
              }}>
                Proceed to Checkout
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
