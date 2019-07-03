import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CoinsActions } from '../../store/ducks/coins';

import ConfirmButton from '../../components/ConfirmButton';
import CoinGrid from '../../components/CoinGrid';
import Search from '../../components/Search';

import { Container, Title } from './styles';

class Settings extends Component {
  state = {
    showTitle: true,
  };

  componentDidMount() {
    const { getCoinsRequest } = this.props;

    const favorites = localStorage.getItem('dataFavorites');

    if (!favorites) getCoinsRequest();
  }

  handleConfirmButtonClick = () => {
    this.setState({ showTitle: false });
  };

  render() {
    const { showTitle } = this.state;

    return (
      <Container>
        {showTitle && (
          <Title>Welcome to CryptoDash, please select your favorite coins to begin</Title>
        )}
        <ConfirmButton click={this.handleConfirmButtonClick} />
        <Search />
        <CoinGrid />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CoinsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Settings);
