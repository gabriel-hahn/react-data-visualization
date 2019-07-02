import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as CoinsActions } from '../../store/ducks/coins';

import { SelectableTile } from '../../styles/tile';
import { Container, CoinImage, CoinText } from './styles';

class CoinGrid extends Component {
  componentDidMount() {}

  static propTypes = {
    coins: PropTypes.arrayOf(
      PropTypes.shape({
        CoinInfo: PropTypes.shape({
          Id: PropTypes.string.isRequired,
          FullName: PropTypes.string.isRequired,
          ImageUrl: PropTypes.string.isRequired,
        }),
      }),
    ),
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        CoinInfo: PropTypes.shape({
          Id: PropTypes.string.isRequired,
          FullName: PropTypes.string.isRequired,
          ImageUrl: PropTypes.string.isRequired,
        }),
      }),
    ),
    addFavorite: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired,
  };

  static defaultProps = {
    coins: [],
    favorites: [],
  };

  handleCoinClick = (coin) => {
    const { addFavorite, removeFavorite, favorites } = this.props;

    if (favorites.includes(coin)) {
      removeFavorite(coin);
    } else {
      addFavorite(coin);
    }
  };

  render() {
    const API_URL = 'http://cryptocompare.com/';
    const { coins, favorites } = this.props;

    return (
      <Container>
        {coins.length > 0
          && coins.map(coin => (
            <SelectableTile
              selected={favorites.includes(coin)}
              key={coin.CoinInfo.Id}
              onClick={() => this.handleCoinClick(coin)}
            >
              <CoinText>{coin.CoinInfo.FullName}</CoinText>
              <CoinImage src={`${API_URL}${coin.CoinInfo.ImageUrl}`} alt={coin.CoinInfo.FullName} />
            </SelectableTile>
          ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  coins: state.coins.items || [],
  favorites: state.coins.favorites || [],
});

const mapDispatchToProps = dispatch => bindActionCreators(CoinsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoinGrid);
