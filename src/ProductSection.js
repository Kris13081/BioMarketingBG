import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductSection = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container py-4">
      <div className="d-flex flex-column align-items-center mb-4">
        <h2 className="text-center mb-2" style={{ fontFamily: "'Lobster', cursive" }}>Нашите Продукти</h2>
        <p className="text-muted text-center" style={{ fontSize: '1rem' }}>
          Разгледайте нашата невероятна селекция! Кликнете върху стрелката по-долу!
        </p>
        <button
          className="btn btn-gradient rounded-circle d-flex justify-content-center align-items-center shadow-lg"
          style={{
            width: '70px',
            height: '70px',
            fontSize: '2rem',
            background: 'linear-gradient(45deg, #4CAF50, #81C784)',
            border: 'none',
            color: 'white',
          }}
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Скрий продукти' : 'Покажи продукти'}
        >
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>

      {isExpanded && (
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-md-4 mb-3"
            >
              <div className="card h-100 border-0 shadow-sm" onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted">{product.description}</p>
                  <p className="text-success"><strong>{product.price.toFixed(2)} лв.</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button type="button" className="btn-close" onClick={closePopup}></button>
              </div>
              <div className="modal-body">
                <p>{selectedProduct.description}</p>
                <p><strong>Цена:</strong> {selectedProduct.price.toFixed(2)} лв.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closePopup}>Затвори</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default ProductSection;