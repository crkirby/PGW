import React, { Component } from 'react';
import { Container, Row, Jumbotron, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ProductPreview from './ProductPreview'
import mapDispatchToProps from './store/actions'
import './Products.css'

class Products extends Component {
  state = {
    loading: false
  }

  componentDidUpdate(){
    console.log(this.props)
  }
  
  shouldComponentUpdate(_nextProps, nextState){
    return this.state.loading !== nextState.loading
  }

  async componentDidMount() {
    await this.props.fetchProducts()
    this.setState({ loading: !this.state.loading })
  }

  productHandler = (id) => {
    const { history } = this.props
    history.push(`/productpage.${id}.html`)
  }

  render() {
    const productPrievews = this.props.products.map(({ _id, name, price }) => {
      return (
        <ProductPreview key={_id}
          name={name}
          price={price}
          clicked={() => this.productHandler(_id)} />
      )
    })

    const loader = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading Products...</span>
      </Spinner>
    )

    return (
      <div>
        <Jumbotron>
          <h1>Hello, welcome to the Store!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        </Jumbotron>
        <Container>
          <Row className="products">
            {this.state.loading ? productPrievews : loader}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    currentProduct: state.product
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products))
