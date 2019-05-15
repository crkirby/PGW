import React from 'react';
import { Col } from "react-bootstrap";
import "./ProductPreview.css";

function ProductPreview({ name, price, clicked }) {
  const formattedPrice = '$'.concat((price).toLocaleString())
  return (
    <div>
      <Col className='product-preview'>
        <img className="preview-image" onClick={clicked} src={'https://via.placeholder.com/250x375'} alt="product" />
        <div>
          <div className="preview-details">
            <h6 className="preview-name" onClick={clicked}>{name}</h6>
            <strong>{formattedPrice}</strong>
          </div>
        </div>

      </Col>
    </div>
  );
}

export default ProductPreview;
