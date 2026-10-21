import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import AppRoutes from './AppRoutes';

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
      .catch((err) => {
        console.error('Lỗi khi tải dữ liệu sản phẩm:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };

}
export default App;