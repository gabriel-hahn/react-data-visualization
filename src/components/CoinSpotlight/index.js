import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PriceChart from '../PriceChart';

import { Tile } from '../../styles/tile';
import { Container, CoinImage } from './styles';

const API_URL = 'http://cryptocompare.com/';

class CoinSpotlight extends Component {
  static propTypes = {
    currentFavorite: PropTypes.shape({
      FullName: PropTypes.string.isRequired,
      ImageUrl: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    currentFavorite: null,
  };

  render() {
    const { currentFavorite } = this.props;

    return (
      currentFavorite && (
        <Container>
          <Tile>
            <h2>{currentFavorite.FullName}</h2>
            <CoinImage
              src={`${API_URL}${currentFavorite.ImageUrl}`}
              alt={currentFavorite.FullName}
            />
          </Tile>
          <PriceChart />
        </Container>
      )
    );
  }
}

const mapStateToProps = state => ({
  currentFavorite: state.favorites.current,
});

export default connect(mapStateToProps)(CoinSpotlight);
