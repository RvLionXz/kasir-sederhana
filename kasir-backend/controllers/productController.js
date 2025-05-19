const db = require('../db');

exports.getProducts = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products');
  res.json(rows);
};

exports.createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  await db.query('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)', [name, price, stock]);
  res.json({ message: 'Produk ditambahkan' });
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  await db.query('UPDATE products SET name=?, price=?, stock=? WHERE id=?', [name, price, stock, id]);
  res.json({ message: 'Produk diperbarui' });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM products WHERE id=?', [id]);
  res.json({ message: 'Produk dihapus' });
};
