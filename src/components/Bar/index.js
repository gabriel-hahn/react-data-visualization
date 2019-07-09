import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import {
  Container, Logo, RouterLink, Button,
} from './styles';

const VALUES = {
  DASHBOARD: 'Dashboard',
  SETTINGS: 'Settings',
};

class Bar extends Component {
  state = {
    current: VALUES.DASHBOARD,
  };

  static propTypes = {
    getPricesRequest: PropTypes.func.isRequired,
    addFavoriteStorage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getPricesRequest, addFavoriteStorage } = this.props;
    const cryptoDashData = this.getFavoritesStorage();

    if (!cryptoDashData) {
      this.setState({ current: VALUES.SETTINGS });
    } else {
      addFavoriteStorage(cryptoDashData);
      getPricesRequest();
    }
  }

  getFavoritesStorage = () => JSON.parse(localStorage.getItem('cryptodash@dataFavorites'));

  barOptionsValidade = (selected) => {
    const cryptoDashData = this.getFavoritesStorage();

    if (selected === VALUES.DASHBOARD) {
      this.setState({ current: !cryptoDashData ? VALUES.SETTINGS : VALUES.DASHBOARD });
    } else {
      this.setState({ current: selected });
    }
  };

  handleClick = (current) => {
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <Container>
        <Logo>CryptoDash</Logo>
        <div />
        <RouterLink to="/dashboard">
          <Button
            onClick={() => this.barOptionsValidade(VALUES.DASHBOARD)}
            active={current === VALUES.DASHBOARD}
          >
            {VALUES.DASHBOARD}
          </Button>
        </RouterLink>
        <RouterLink to="/settings">
          <Button
            onClick={() => this.barOptionsValidade(VALUES.SETTINGS)}
            active={current === VALUES.SETTINGS}
          >
            {VALUES.SETTINGS}
          </Button>
        </RouterLink>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Bar);
