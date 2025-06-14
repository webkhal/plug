// app/products/[category]/page.js

export default function CategoryPage({ params }) {
  const { category } = params;

  // Example dummy category data
  const productsByCategory = {
    buttons: [
      { id: 1, name: 'Designer Buttons - Gold', price: 399 },
      { id: 2, name: 'Luxury Button Set - Black Pearl', price: 499 },
    ],
    footwear: [
      { id: 3, name: 'Vintage Royal Footwear', price: 1899 },
      { id: 4, name: 'Doctor Shoes (Orthopedic)', price: 2199 },
    ],
    watches: [
      { id: 5, name: 'Royal Antique Watch', price: 5999 },
      { id: 6, name: 'Teen Youth Watch', price: 2499 },
    ],
    kurtis: [
      { id: 7, name: 'Authentic Pure Cotton Kurti', price: 1399 },
      { id: 8, name: 'Luxury Gifting Kurti', price: 2099 },
    ],
    abayas: [
      { id: 9, name: 'Ancient Black Abaya', price: 2599 },
      { id: 10, name: 'Royal Style Burkha', price: 3199 },
    ]
  };

  const products = productsByCategory[category] || [];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Category: {category.toUpperCase()}</h1>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px'
            }}>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>View</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
