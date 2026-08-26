import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading product details...</p>;
  if (!product) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Product not found!</p>;

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
        ← Back to Products
      </Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '20px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', borderRadius: '12px', maxHeight: '400px', objectFit: 'cover' }} 
        />
        <div>
          <h2>{product.name}</h2>
          <h3 style={{ color: '#007bff', fontSize: '24px' }}>${product.price}</h3>
          <p style={{ color: '#555', lineHeight: '1.6' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold', color: product.countInStock > 0 ? 'green' : 'red' }}>
            Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
          <button
            onClick={() => addToCart(product)}
            disabled={product.countInStock === 0}
            style={{
              padding: '12px 24px',
              backgroundColor: product.countInStock > 0 ? '#007bff' : '#ccc',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: product.countInStock > 0 ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;