import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SelectableTile } from '../../styles/tile';
import { Container } from './styles';

class CoinGrid extends Component {
  componentDidMount() {}

  getCoinsToDisplay = coinList => Object.keys(coinList).slice(0, 100);

  render() {
    const { coins } = this.props;

    return (
      <Container>
        {Object.keys(coins).map(coinKey => (
          <SelectableTile key={coinKey}>{coinKey}</SelectableTile>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  coins: state.coins.items,
});

export default connect(mapStateToProps)(CoinGrid);
