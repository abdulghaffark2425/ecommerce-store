import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { _id: '1', name: 'Sample Product 1', image: '/images/sample.jpg', description: 'Sample Description', price: 89.99, countInStock: 10 },
    { _id: '2', name: 'Sample Product 2', image: '/images/sample.jpg', description: 'Sample Description', price: 120.00, countInStock: 5 }
  ]);
});

router.get('/:id', (req, res) => {
  res.json({ _id: req.params.id, name: 'Sample Product', image: '/images/sample.jpg', description: 'Sample Description', price: 89.99, countInStock: 10 });
});

export default router;
