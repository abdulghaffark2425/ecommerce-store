import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
      navigate('/login');
    } else {
      setUser(userInfo);
    }
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h2>User Profile</h2>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <p><strong>Name:</strong> {user.name || 'User'}</p>
        <p><strong>Email:</strong> {user.email || 'user@example.com'}</p>
        <button
          onClick={logoutHandler}
          style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
