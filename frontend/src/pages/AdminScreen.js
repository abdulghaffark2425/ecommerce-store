import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/orders');
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard - All Orders</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }} border="1">
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', height: '40px' }}>
            <th>ID</th>
            <th>USER</th>
            <th>TOTAL</th>
            <th>ITEMS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} style={{ textAlign: 'center', height: '40px' }}>
              <td>{order._id}</td>
              <td>{order.user ? order.user.name : 'Guest'}</td>
              <td>${order.totalPrice}</td>
              <td>{order.orderItems.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminScreen;
