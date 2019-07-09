import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import PriceTile from '../PriceTile';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import { Container } from './styles';

class PriceGrid extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        Id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    currentFavorite: PropTypes.shape({
      Id: PropTypes.string.isRequired,
    }),
    getHistoricalRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentFavorite: null,
  };

  handleFavoriteClick = (coin) => {
    const { currentFavorite, getHistoricalRequest } = this.props;

    if (currentFavorite !== coin) {
      getHistoricalRequest(coin);
    }
  };

  render() {
    const { items, currentFavorite } = this.props;

    return (
      <Container>
        {items.map(
          (coin, index) => coin.price && (
          <PriceTile
            selected={currentFavorite === coin}
            key={coin.Id}
            coin={coin}
            index={index}
            selectFavorite={this.handleFavoriteClick}
          />
          ),
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

const mapStateToProps = state => ({
  items: state.favorites.items,
  currentFavorite: state.favorites.current,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PriceGrid);
