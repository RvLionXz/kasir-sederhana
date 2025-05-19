const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(cors({
  origin: 'http://http://47.250.187.233:3031',
  credentials: true
}));

app.use(express.json());

app.use('/products', productRoutes);
app.use('/transactions', transactionRoutes);

const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
