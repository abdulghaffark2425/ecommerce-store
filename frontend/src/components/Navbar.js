import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
        MERN Store
      </Link>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
          Cart ({cartItems.length})
        </Link>
        {userInfo ? (
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span style={{ color: '#00ecff', fontWeight: 'bold' }}>{userInfo.name}</span>
            <button 
              onClick={logoutHandler}
              style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
