import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PriceGrid from '../../components/PriceGrid';
import CoinSpotlight from '../../components/CoinSpotlight';

import { Container } from './styles';

class Dashboard extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { history } = this.props;
    const favorites = this.getFavoritesStorage();

    if (favorites.length === 0) {
      history.push('/settings');
    }
  }

  getFavoritesStorage = () => JSON.parse(localStorage.getItem('cryptodash@dataFavorites'));

  render() {
    return (
      <Container>
        <PriceGrid />
        <CoinSpotlight />
      </Container>
    );
  }
}

export default Dashboard;
