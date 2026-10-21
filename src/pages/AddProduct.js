import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddProduct = ({ onAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState(CATEGORIES[1]);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, category, price: Number(price), quantity: Number(quantity) });
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '250px' }}>
      <h2>Thêm Sản Phẩm</h2>
      <input placeholder="Tên" value={name} onChange={(e) => setName(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.filter(c => c !== 'Tất cả').map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <input type="number" placeholder="Giá" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Số lượng" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default AddProduct;