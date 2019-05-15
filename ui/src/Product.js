import React from 'react';
import "./Product.scss";

class Product extends React.Component {
  state = {
    product: {}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch('http://localhost:3001/products/' + id)
      .then(response => response.json())
      .then(product => {
        return this.setState({ product });
      })
  }

  render() {
    let { name, price, description, tags } = this.state.product

    return (
      <div className="grid-container">
        <img src={'https://via.placeholder.com/831x455'} alt="img" className="item item--1" />
        <img src={'https://via.placeholder.com/235x130'} alt="img" className="item item--2" />
        <img src={'https://via.placeholder.com/235x130'} alt="img" className="item item--3" />
        <img src={'https://via.placeholder.com/235x130'} alt="img" className="item item--4" />
        <p>Tags: {tags}</p>
        <div className="item item--5">
          <h2>{name}</h2>
          <p>{description}</p>
          <p><strong>${price}</strong></p>
          <div>
            <h5>Size</h5>
            <div className="item_sizes">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
          <p>{ "Pants/Shirt/Type " }styles</p>
          <p>Color</p>
          <p>Quantity</p>
          <p>Add to Cart</p>
          <p>Buy Now</p>
        </div>
      </div>
    )
  }
}

export default Product;
