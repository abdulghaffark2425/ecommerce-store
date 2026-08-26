const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: 'Wireless Bluetooth Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'High quality wireless noise-canceling headphones',
    price: 49.99,
    countInStock: 10,
  },
  {
    name: 'Mechanical Gaming Keyboard',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
    description: 'RGB mechanical keyboard with tactile switches',
    price: 79.99,
    countInStock: 7,
  },
  {
    name: 'Ergonomic Office Chair',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500',
    description: 'Comfortable mesh office chair with lumbar support',
    price: 149.99,
    countInStock: 5,
  },
];

const importData = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce'
    );

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();