import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const sampleProducts = [
      {
        _id: '1',
        name: 'Sample Product 1',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
      },
      {
        _id: '2',
        name: 'Sample Product 2',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
      }
    ];
    setProducts(sampleProducts);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Latest Products</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '15px', width: '250px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3 style={{ margin: '15px 0 10px 0' }}>{product.name}</h3>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#0066cc', margin: '0 0 15px 0' }}>${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
