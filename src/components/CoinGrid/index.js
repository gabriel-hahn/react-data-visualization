import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { SelectableTile, DisableTile, DeletableTile } from '../../styles/tile';
import { Container, CoinImage, CoinText } from './styles';

class CoinGrid extends Component {
  componentDidMount() {}

  static propTypes = {
    coins: PropTypes.arrayOf(
      PropTypes.shape({
        CoinInfo: PropTypes.shape({
          Id: PropTypes.number.isRequired,
          FullName: PropTypes.string.isRequired,
          ImageUrl: PropTypes.string.isRequired,
        }),
      }),
    ),
  };

  static defaultProps = {
    coins: [],
  };

  render() {
    const API_URL = 'http://cryptocompare.com/';
    const { coins } = this.props;

    return (
      <Container>
        {coins.length > 0
          && coins.map(coin => (
            <SelectableTile key={coin.CoinInfo.Id}>
              <CoinText>{coin.CoinInfo.FullName}</CoinText>
              <CoinImage src={`${API_URL}${coin.CoinInfo.ImageUrl}`} alt={coin.CoinInfo.FullName} />
            </SelectableTile>
          ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  coins: state.coins.items || [],
});

export default connect(mapStateToProps)(CoinGrid);
