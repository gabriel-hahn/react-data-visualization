import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CoinsActions } from '../../store/ducks/coins';

import ConfirmButton from '../../components/ConfirmButton';

import { Container, Title } from './styles';

class Settings extends Component {
  state = {
    showTitle: true,
  };

  componentDidMount() {
    const { getCoinsRequest } = this.props;

    getCoinsRequest();
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
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CoinsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Settings);
