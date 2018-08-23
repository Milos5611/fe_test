/* eslint-disable */
import React from 'react';
import {
    Button,
    Col,
    ListGroupItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
} from 'reactstrap';

import PriceInBitcoin from './PriceInBitcoin';

import './Product.css';

class Product extends React.Component {
    state = {quantity: 1};

    handleSubtract = () => {
        this.setState(prevState => ({
            quantity: prevState.quantity - 1
        }));
    };

    handleAdd = () => {
        this.setState(prevState => ({
            quantity: prevState.quantity + 1
        }));
    };

    render() {
        return (
            <ListGroupItem>
                <Row>
                    <Col xs="3">
                        <img className="product-image" src={this.props.data.image} alt={this.props.data.name}/>
                    </Col>
                    <Col xs="8">
                        <h5 className="text-primary">{this.props.data.name}</h5>
                        <p className="text-info">
                            ${(this.props.data.price / 100).toFixed(2)}
                            <br/>
                            <PriceInBitcoin price={this.props.data.price / 100}/>
                        </p>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button outline onClick={this.handleSubtract.bind(this)}>
                                    -
                                </Button>
                            </InputGroupAddon>
                            <InputGroupText>{this.state.quantity}</InputGroupText>
                            <InputGroupAddon addonType="append">
                                <Button outline onClick={this.handleAdd.bind(this)}>
                                    +
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <Button
                            color="primary"
                            onClick={() => this.props.onAddToCart(this.props.data, this.state.quantity)}
                        >
                            Add To Cart
                        </Button>
                    </Col>
                </Row>
            </ListGroupItem>
        );
    }
}

export default Product;
/* eslint-enable */
