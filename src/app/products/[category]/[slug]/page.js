export default function ProductDetailPage({ params }) {
  const { category, slug } = params;

  const productMap = {
    'designer-buttons-gold': {
      name: 'Designer Buttons - Gold',
      description: 'A luxury set of golden designer buttons for men’s premium clothing.',
      price: 399,
    },
    'vintage-doctor-shoes': {
      name: 'Vintage Doctor Shoes',
      description: 'Orthopedic comfortable footwear with a classic vintage design.',
      price: 2199,
    },
    'authentic-cotton-kurti': {
      name: 'Authentic Cotton Kurti',
      description: 'Pure cotton kurti made with love for classy comfort.',
      price: 1399,
    },
    // Add more...
  };

  const product = productMap[slug] || null;

  if (!product) {
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Product not found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <p style={{ margin: '1rem 0' }}>{product.description}</p>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹{product.price}</p>

      <button style={{
        padding: '0.75rem 1.5rem',
        marginTop: '1rem',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Add to Cart
      </button>
    </div>
  );
}
