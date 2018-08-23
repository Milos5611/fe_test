import React from 'react';
import {
  Button,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: this.props.data };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ cart: this.props.data });
    }
  }

  handleQuantityChange = (method, productId) =>
    this.setState({
      cart: {
        ...this.state.cart,
        [productId]: {
          ...this.state.cart[productId],
          quantity:
            method === 'add'
              ? this.state.cart[productId].quantity + 1
              : this.state.cart[productId].quantity !== 0 ?  this.state.cart[productId].quantity - 1 : 0
        },
      },
    });

  getCartTotal = () => {
    const prices = Object.values(this.state.cart).map(cartItem => (cartItem.product.price * cartItem.quantity));
    return prices.reduce((sum, value) => sum + value, 0);
  };

  render() {
    return (
      <ListGroup>
        {Object.values(this.state.cart).map((cartItem, cartIndex) => (
          <ListGroupItem key={cartIndex}>
            <p className="text-primary">{cartItem.product.name}</p>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button
                  outline
                  onClick={() => this.handleQuantityChange('subtract', cartItem.product.id)}
                >
                  -
                </Button>
              </InputGroupAddon>
              <InputGroupText>{cartItem.quantity}</InputGroupText>
              <InputGroupAddon addonType="append">
                <Button
                  outline
                  onClick={() => this.handleQuantityChange('add', cartItem.product.id)}
                >
                  +
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <p className="text-success">${(cartItem.product.price / 100).toFixed(2)}</p>
          </ListGroupItem>
        ))}
        <ListGroupItem>
          <p className="text-success">Total: ${(this.getCartTotal() / 100).toFixed(2)}</p>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Cart;
