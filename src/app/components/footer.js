// components/Footer.js

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#ccc',
      padding: '2rem',
      marginTop: '4rem',
      textAlign: 'center'
    }}>
      <p>&copy; {new Date().getFullYear()} PLUG. All rights reserved.</p>
      <p style={{ marginTop: '0.5rem' }}>
        Fashion that completes your story – designed for generations.
      </p>
    </footer>
  );
}
