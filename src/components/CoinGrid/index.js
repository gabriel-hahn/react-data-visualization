import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import { SelectableTile } from '../../styles/tile';
import { Container, CoinImage, CoinText } from './styles';

class CoinGrid extends Component {
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
    const { addFavorite, removeFavorite } = this.props;

    if (this.isFavorite(coin)) {
      removeFavorite(coin);
    } else {
      addFavorite(coin);
    }
  };

  isFavorite = (coin) => {
    const { favorites } = this.props;

    return favorites.filter(favorite => favorite.CoinInfo.Id === coin.CoinInfo.Id).length > 0;
  };

  render() {
    const API_URL = 'http://cryptocompare.com/';
    const { coins } = this.props;

    return (
      <Container>
        {coins.length > 0
          && coins.map(coin => (
            <SelectableTile
              selected={this.isFavorite(coin)}
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
  coins:
    state.coins.items.filter(
      coin => !coin.excluded
        || state.favorites.items.filter(favorite => favorite.CoinInfo.Id === coin.CoinInfo.Id).length
          > 0,
    ) || [],
  favorites: state.favorites.items || [],
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoinGrid);
