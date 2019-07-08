import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tile } from '../../styles/tile';

import { Container } from './styles';

class CoinSpotlight extends Component {
  render() {
    const { currentFavorite } = this.props;

    return (
      currentFavorite && (
        <Container>
          <Tile>{currentFavorite.Name}</Tile>
        </Container>
      )
    );
  }
}

const mapStateToProps = state => ({
  currentFavorite: state.favorites.current,
});

export default connect(mapStateToProps)(CoinSpotlight);
