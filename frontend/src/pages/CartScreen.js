import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CartScreen = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const checkoutHandler = () => {
    navigate('/shipping');
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1 style={{ marginBottom: '20px' }}>Shopping Cart ({cartItems.length} items)</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go Back</Link></p>
      ) : (
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: '2', minWidth: '300px' }}>
            {cartItems.map((item, index) => (
              <div key={`${item._id}-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #eee', padding: '15px', borderRadius: '8px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} />
                <div style={{ flex: '1', marginLeft: '15px' }}>
                  <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                  <span style={{ color: '#0066cc', fontWeight: 'bold' }}>${item.price}</span>
                </div>
                <button 
                  onClick={() => removeFromCart(item._id)}
                  style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div style={{ flex: '1', minWidth: '250px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', height: 'fit-content', backgroundColor: '#fafafa' }}>
            <h2 style={{ marginTop: 0, borderBottom: '1px solid #eee', paddingBottom: '10px' }}>Order Summary</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontSize: '18px', fontWeight: 'bold' }}>
              <span>Subtotal:</span>
              <span>${totalPrice}</span>
            </div>
            <button 
              onClick={checkoutHandler}
              style={{ width: '100%', padding: '12px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
