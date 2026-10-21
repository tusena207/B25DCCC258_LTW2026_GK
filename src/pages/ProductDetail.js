import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatMoney } from '../data';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm!</p>;

  return (
    <div>
      <h2>Chi Tiết Sản Phẩm</h2>
      <p><strong>Tên:</strong> {product.name}</p>
      <p><strong>Danh mục:</strong> {product.category}</p>
      <p><strong>Giá:</strong> {formatMoney(product.price)}</p>
      <p><strong>Số lượng:</strong> {product.quantity}</p>
      <Link to="/products">← Quay lại</Link>
    </div>
  );
};

export default ProductDetail;