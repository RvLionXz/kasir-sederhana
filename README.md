# 🛒 Aplikasi Kasir Sederhana

Aplikasi Kasir sederhana berbasis **Node.js (Express)** untuk backend, **MySQL** sebagai database, dan **HTML + TailwindCSS + JavaScript** untuk frontend.

---

## 📦 Fitur

- Tambah produk
- Lihat daftar produk
- Edit produk
- Hapus produk
- Antarmuka responsif dan ringan

---

## 🧠 Struktur Proyek

kasir-backend/
├── controllers/
│ └── productController.js
├── db.js
├── server.js
├── .env
└── package.json

kasir-frontend/
├── index.html
├── script.js
└── README.md


---

## ⚙️ Backend (Node.js + Express)

### 🔧 Install Dependencies
```bash
npm install express mysql2 cors dotenv

🗂️ Struktur File Backend

    server.js: File utama server

    controllers/productController.js: Logic CRUD produk

    db.js: Koneksi ke database MySQL

    .env: File konfigurasi rahasia

▶️ Menjalankan Backend

node server.js

🌐 API Endpoint
Metode	URL	Deskripsi
GET	/products	Menampilkan semua produk
POST	/products	Menambahkan produk
PUT	/products/:id	Mengubah produk
DELETE	/products/:id	Menghapus produk
🗃️ Database (MySQL)
📌 Struktur Tabel

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price INT,
  stock INT
);

🔐 Contoh .env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=kasir

🎨 Frontend (HTML + Tailwind CSS + JavaScript)
📁 File Penting

    index.html: Tampilan utama

    script.js: Logic interaksi dengan API

🎯 Fitur Frontend

    Menambahkan produk baru

    Menampilkan semua produk

    Mengedit produk

    Menghapus produk

    Responsif (mobile & desktop)

📷 Tampilan Antarmuka

✅ Syarat Menjalankan Aplikasi

    Node.js dan npm

    MySQL

    Browser (Chrome/Firefox)

    Tailwind CSS (CDN sudah digunakan)

🧑‍💻 Developer

Nama: rvlionxz
Role: Junior Programmer
Github: rvlionxz
