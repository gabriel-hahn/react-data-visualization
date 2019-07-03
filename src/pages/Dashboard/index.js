import React, { Component } from 'react';

import PriceGrid from '../../components/PriceGrid';

import { Container } from './styles';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <PriceGrid />
      </Container>
    );
  }
}

export default Dashboard;
