import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import ProductTable from '../components/ProductTable';

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const filtered = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === 'Tất cả' || p.category === selectedCategory;
    return matchName && matchCat;
  });

  return (
    <div>
      <h2>Danh Sách Sản Phẩm</h2>
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductTable products={filtered} />
    </div>
  );
};

export default ProductList;