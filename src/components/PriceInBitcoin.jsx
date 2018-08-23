import React from 'react';
import { priceInBitcoin } from '../bitcoin';

class PriceInBitcoin extends React.Component {
  state = { hasError: false, price: null };

  componentDidMount() {
    priceInBitcoin(this.props.price)
      .then(p => this.setState({ price: p }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    if (this.state.error) {
      return <span>{this.state.error}</span>;
    }

    if (!this.state.price) {
      return <span>loading price in bitcoin</span>;
    }

    return <span>BTC: {this.state.price}</span>;
  }
}

export default PriceInBitcoin;
