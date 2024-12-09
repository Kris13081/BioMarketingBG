import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <h2
          className="text-center mb-2"
          style={{ fontFamily: "'Lobster', cursive" }}
        >
          Нашите Продукти
        </h2>
        <p className="text-muted text-center" style={{ fontSize: "1rem" }}>
          Разгледайте нашата невероятна селекция! Кликнете върху стрелката
          по-долу!
        </p>
        <button
          className="btn btn-gradient rounded-circle d-flex justify-content-center align-items-center shadow-lg"
          style={{
            width: "70px",
            height: "70px",
            fontSize: "2rem",
            background: "linear-gradient(45deg, #4CAF50, #81C784)",
            border: "none",
            color: "white",
          }}
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Скрий продукти" : "Покажи продукти"}
        >
          {isExpanded ? "▲" : "▼"}
        </button>
      </div>

      {isExpanded && (
  <div className="product-cards-container row">
    {products.map((product) => (
      <div key={product.id} className="product-card col-md-4 mb-4">
        <div
          className="card h-100 border-0 shadow-lg rounded-3 p-3"
          onClick={() => handleProductClick(product)}
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title text-dark fw-bold mt-3">{product.name}</h5>
            <p className="card-text text-muted mt-2">
              <span className="text-uppercase">В наличност</span>
            </p>
            <p className="card-text text-success fs-4 mt-2">
              <strong>{product.price.toFixed(2)} лв.</strong>
            </p>
            <button className="btn btn-primary w-100 mt-2 shadow-sm rounded-pill">
              Още Информация
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)}



{selectedProduct && (
  <div
    className="modal fade show d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
  >
    <div className="modal-dialog modal-lg">
      <div
        className="modal-content rounded-4 shadow-lg"
        style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)", border: "none" }}
      >
        <div className="modal-header border-bottom-0 p-4">
          <h5 className="modal-title text-dark fw-bold">{selectedProduct.name}</h5>
          <button
            type="button"
            className="btn-close"
            onClick={closePopup}
            aria-label="Close"
            style={{ fontSize: "1.5rem", color: "#333" }}
          ></button>
        </div>
        <div className="modal-body p-4">
          <div className="d-flex justify-content-center mb-3">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid rounded-4 shadow-lg" id="pop-img"
              style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "contain" }}
            />
          </div>
          <div
            className="product-description text-muted"
            dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
          ></div>
          <p className="mt-3 text-dark fs-4 fw-bold">
            <strong>Цена:</strong> {selectedProduct.price.toFixed(2)} лв.
          </p>
        </div>
        <div className="modal-footer border-top-0 d-flex justify-content-end p-3">
          <button
            type="button"
            className="btn btn-primary rounded-pill px-4 py-2 shadow-sm"
            onClick={closePopup}
            style={{ fontSize: "1.1rem", transition: "background-color 0.3s, transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};
export default ProductSection;
