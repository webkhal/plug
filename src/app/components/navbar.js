// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#111',
      color: 'white'
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
        PLUG
      </Link>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/products" style={{ color: 'white' }}>Products</Link>
        <Link href="/about" style={{ color: 'white' }}>About</Link>
        <Link href="/contact" style={{ color: 'white' }}>Contact</Link>
        <Link href="/cart" style={{ color: 'white' }}>Cart 🛒</Link>
        <Link href="/auth/login" style={{ color: 'white' }}>Login</Link>
      </div>
    </nav>
  );
}
// This Navbar component can be imported and used in your main layout or individual pages.
// For example, in your main layout file (e.g., src/app/layout.js):             