// app/checkout/page.js

'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    payment: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order placement
    alert('Order placed successfully!');
    window.location.href = '/success';
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <input name="name" type="text" placeholder="Full Name" required value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
        <input name="address" type="text" placeholder="Street Address" required value={form.address} onChange={handleChange} />
        <input name="city" type="text" placeholder="City" required value={form.city} onChange={handleChange} />
        <input name="zip" type="text" placeholder="ZIP / Postal Code" required value={form.zip} onChange={handleChange} />

        <select name="payment" required value={form.payment} onChange={handleChange}>
          <option value="">Select Payment Method</option>
          <option value="cod">Cash on Delivery</option>
          <option value="upi">UPI</option>
          <option value="card">Credit/Debit Card</option>
        </select>

        <button type="submit" style={{
          padding: '0.75rem',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}>
          Place Order
        </button>
      </form>
    </div>
  );
}
