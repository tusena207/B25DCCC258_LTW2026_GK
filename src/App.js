import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('/data/products.json')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout loading={loading} error={error} />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList products={products} />} />
          <Route path="products/:id" element={<ProductDetail products={products} />} />
          <Route path="add" element={<AddProduct onAdd={handleAddProduct} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
 
}

export default App;