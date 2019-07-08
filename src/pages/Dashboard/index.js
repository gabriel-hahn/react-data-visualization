import React, { Component } from 'react';
import { connect } from 'react-redux';

import PriceGrid from '../../components/PriceGrid';
import CoinSpotlight from '../../components/CoinSpotlight';

import { Container } from './styles';

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <PriceGrid />
        <CoinSpotlight />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  coin: state.favorites.items,
});

export default connect(mapStateToProps)(Dashboard);
