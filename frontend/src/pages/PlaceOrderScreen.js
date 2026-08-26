import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const PlaceOrderScreen = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = (itemsPrice + shippingPrice).toFixed(2);

  const placeOrderHandler = () => {
    alert('Order Placed Successfully!');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '10px' }}>
      <h2>Order Review</h2>
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '2', minWidth: '300px' }}>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
            <h3>Order Items</h3>
            {cartItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                <span>{item.name}</span>
                <span style={{ fontWeight: 'bold' }}>${item.price}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ flex: '1', minWidth: '250px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
          <h3>Order Summary</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
            <span>Items:</span>
            <span>${itemsPrice.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
            <span>Shipping:</span>
            <span>${shippingPrice.toFixed(2)}</span>
          </div>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontWeight: 'bold', fontSize: '18px' }}>
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <button 
            onClick={placeOrderHandler}
            style={{ width: '100%', padding: '12px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
