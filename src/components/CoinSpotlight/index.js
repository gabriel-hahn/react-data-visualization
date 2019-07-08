import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tile } from '../../styles/tile';

import PriceChart from '../PriceChart';

import { Container, CoinImage } from './styles';

class CoinSpotlight extends Component {
  render() {
    const API_URL = 'http://cryptocompare.com/';
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
