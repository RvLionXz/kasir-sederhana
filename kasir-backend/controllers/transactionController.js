const db = require('../db');

exports.getTransactions = async (req, res) => {
  const [rows] = await db.query(`
    SELECT t.*, p.name AS product_name
    FROM transactions t
    JOIN products p ON t.product_id = p.id
    ORDER BY t.created_at DESC
  `);
  res.json(rows);
};

exports.createTransaction = async (req, res) => {
  const { product_id, quantity } = req.body;

  const [[product]] = await db.query('SELECT * FROM products WHERE id=?', [product_id]);
  if (!product) return res.status(404).json({ error: 'Produk tidak ditemukan' });
  if (product.stock < quantity) return res.status(400).json({ error: 'Stok tidak cukup' });

  const total_price = product.price * quantity;

  await db.query('INSERT INTO transactions (product_id, quantity, total_price) VALUES (?, ?, ?)', [product_id, quantity, total_price]);
  await db.query('UPDATE products SET stock = stock - ? WHERE id=?', [quantity, product_id]);

  res.json({ message: 'Transaksi berhasil' });
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM transactions WHERE id=?', [id]);
  res.json({ message: 'Transaksi dihapus' });
};
