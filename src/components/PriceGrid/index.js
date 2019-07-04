import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PriceTile from '../PriceTile';

import { Container } from './styles';

class PriceGrid extends Component {
  state = {
    currentFavorite: null,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        Id: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleFavoriteClick = (coin) => {
    const { currentFavorite } = this.state;

    if (currentFavorite !== coin) {
      this.setState({ currentFavorite: coin });
    }
  };

  render() {
    const { items } = this.props;
    const { currentFavorite } = this.state;

    return (
      <Container>
        {items.map(coin => (
          <PriceTile
            selected={currentFavorite === coin}
            key={coin.Id}
            coin={coin}
            selectFavorite={this.handleFavoriteClick}
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.favorites.items,
});

export default connect(mapStateToProps)(PriceGrid);
