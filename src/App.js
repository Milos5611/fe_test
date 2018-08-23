import React from 'react';
import { Container, Col, ListGroup, Navbar, NavbarBrand, Row } from 'reactstrap';

import { Cart, Product } from './components';
import { fetchProducts } from './api';

class App extends React.Component {
  state = { products: [], cart: {} };

  componentDidMount() {
    fetchProducts().then(products => this.setState({ products }));
  }

  handleAddToCart(product, quantity) {
    const cartItem = this.state.cart[product.id];

    if (!cartItem) {
      this.setState({
        cart: {
          ...this.state.cart,
          [product.id]: { product, quantity },
        },
      });
    } else {
      this.setState({
        cart: {
          ...this.state.cart,
          [product.id]: {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          },
        },
      });
    }
  }

  render() {
    return (
      <Container>
        <Navbar>
          <NavbarBrand>Gigsterzon</NavbarBrand>
        </Navbar>
        <Row>
          <Col xs="8">
            <h4>Products</h4>
            <ListGroup>
              {this.state.products.map(product => (
                <Product key={product.id} data={product} onAddToCart={this.handleAddToCart.bind(this)} />
              ))}
            </ListGroup>
          </Col>
          <Col xs="4">
            <h4>Cart</h4>
            <Cart data={this.state.cart} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
