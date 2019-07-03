import React, { Component } from 'react';
import { connect } from 'react-redux';

import PriceTile from '../PriceTile';

import { Container } from './styles';

class PriceGrid extends Component {
  render() {
    const { items } = this.props;
    return (
      <Container>
        <PriceTile />
        <PriceTile />
        <PriceTile />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.favorites.items,
});

export default connect(mapStateToProps)(PriceGrid);
