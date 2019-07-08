import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, CoinHeader, TickerPrice, ChangePct,
} from './styles';

export default class PriceTile extends Component {
  static propTypes = {
    coin: PropTypes.shape({
      price: PropTypes.shape({
        USD: PropTypes.shape({
          CHANGEPCT24HOUR: PropTypes.number.isRequired,
          PRICE: PropTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
      Name: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    selectFavorite: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selected: false,
  };

  formatPrice = price => price.toString().slice(0, 7);

  render() {
    const {
      coin, selected, selectFavorite, index,
    } = this.props;

    return (
      <Container index={index} selected={selected} onClick={() => selectFavorite(coin)}>
        <CoinHeader>
          {coin.Name}
          <ChangePct red={coin.price.USD.CHANGEPCT24HOUR < 0}>
            {this.formatPrice(coin.price.USD.CHANGEPCT24HOUR)}
          </ChangePct>
        </CoinHeader>
        <TickerPrice index={index}>
$
          {this.formatPrice(coin.price.USD.PRICE)}
        </TickerPrice>
      </Container>
    );
  }
}
