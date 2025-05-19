const apiUrl = 'http://47.250.187.233:3031/products';

document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();

  const form = document.getElementById('product-form');
  form.addEventListener('submit', handleFormSubmit);
});

async function fetchProducts() {
  const res = await fetch(apiUrl);
  const products = await res.json();
  const tbody = document.getElementById('product-list');
  tbody.innerHTML = '';

  products.forEach(product => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td class="border px-4 py-2">${product.name}</td>
      <td class="border px-4 py-2">Rp ${product.price}</td>
      <td class="border px-4 py-2">${product.stock}</td>
      <td class="border px-4 py-2 flex gap-2 justify-center">
        <button onclick="editProduct(${product.id}, '${product.name}', ${product.price}, ${product.stock})" class="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
        <button onclick="deleteProduct(${product.id})" class="bg-red-600 text-white px-2 py-1 rounded">Hapus</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('product-id').value;
  const name = document.getElementById('name').value;
  const price = parseInt(document.getElementById('price').value);
  const stock = parseInt(document.getElementById('stock').value);

  const payload = { name, price, stock };

  if (id) {
    await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } else {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  }

  document.getElementById('product-form').reset();
  fetchProducts();
}

function editProduct(id, name, price, stock) {
  document.getElementById('product-id').value = id;
  document.getElementById('name').value = name;
  document.getElementById('price').value = price;
  document.getElementById('stock').value = stock;
}

async function deleteProduct(id) {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });
    fetchProducts();
  }
}
