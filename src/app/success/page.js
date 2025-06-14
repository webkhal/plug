// app/success/page.js

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div style={{
      padding: '4rem',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2rem', color: 'green' }}>🎉 Order Placed Successfully!</h1>
      <p style={{ marginTop: '1rem' }}>
        Thank you for shopping with <strong>PLUG</strong>. Your order is confirmed and will be delivered soon.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/">
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
