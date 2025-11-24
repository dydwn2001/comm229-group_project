import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "Shirt",
    price: "",
    size: "M",
    instock: true,
  });
  const [error, setError] = useState("");
  const API_URL = "http://localhost:3000/api/products";

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setProducts(res.data))
      .catch(() => setError("Failed to load products."));
  }, []);

  const addProduct = () => {
    axios.post(API_URL, form)
      .then((res) => setProducts([...products, res.data]))
      .catch(() => setError("Failed to add product."));
  };

  return (
    <div className="main-container">
      <h1 className="title">PikaPika Clothing Inventory</h1>
      <p className="subtitle">Manage Pikachu-themed shirts and pants for the mall store.</p>

      {error && <p className="error">{error}</p>}

      <div className="form-card">
        <h3>Add New Product</h3>

        <div className="form-row">
          <input
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <select
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="Shirt">Shirt</option>
            <option value="Pants">Pants</option>
          </select>
          <input
            type="number"
            placeholder="Price ($)"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <select onChange={(e) => setForm({ ...form, size: e.target.value })}>
            <option>M</option>
            <option>S</option>
            <option>L</option>
          </select>
          <input
            type="checkbox"
            checked={form.instock}
            onChange={(e) => setForm({ ...form, instock: e.target.checked })}
          />
          In Stock
          <button className="add-btn" onClick={addProduct}>Add Product</button>
        </div>
      </div>

      <div className="current-products">
        <h3>Current Products</h3>
        {products.length === 0 ? (
          <p>No PikaPika items yet. Add one above!</p>
        ) : (
          products.map((p) => <p className="product-item" key={p._id}>{p.name}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
