import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';

import { Creators as CoinsActions } from '../../store/ducks/coins';

import { Container, SearchInput } from './styles';

class Search extends Component {
  static propTypes = {
    setFilter: propTypes.func.isRequired,
  };

  handleFilterCoin = (event) => {
    const { setFilter } = this.props;
    const inputValue = event.target.value;
    
    setFilter(inputValue);
  };

  render() {
    return (
      <Container>
        <h2>Search all coins</h2>
        <SearchInput onKeyUp={e => this.handleFilterCoin(e)} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CoinsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Search);
