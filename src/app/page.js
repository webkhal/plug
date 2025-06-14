// app/page.js

export default function HomePage() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Welcome to <strong>PLUG</strong></h1>
        <p>Fashion That Completes You</p>
        <p>
          Explore our collection of designer buttons, vintage shoes, authentic kurtis,
          ancient-style abayas, and premium accessories.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', padding: '2rem' }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3>👔 Designer Buttons</h3>
          <p>Elegance stitched into every detail.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3>👞 Vintage Footwear</h3>
          <p>For elders who walk in grace.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3>⌚ Royal Watches</h3>
          <p>Timeless styles for all generations.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3>👗 Pure Cotton Kurtis</h3>
          <p>Breathable, beautiful, and bold.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3>🧕 Abayas & Burkhas</h3>
          <p>Tradition meets taste.</p>
        </div>
      </section>
    </div>
  );
}
