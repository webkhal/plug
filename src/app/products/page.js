import Link from 'next/link';

export default function ProductsLandingPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>All Product Categories</h1>
      <ul>
        <li><Link href="/products/buttons">Buttons</Link></li>
        <li><Link href="/products/footwear">Footwear</Link></li>
        <li><Link href="/products/kurtis">Kurtis</Link></li>
        <li><Link href="/products/watches">Watches</Link></li>
        <li><Link href="/products/abayas">Abayas</Link></li>
      </ul>
    </div>
  );
}
