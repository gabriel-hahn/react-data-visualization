import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PriceTile from '../PriceTile';

import { Container } from './styles';

class PriceGrid extends Component {
  componentDidMount() {}

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        Id: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { items } = this.props;

    return (
      <Container>
        {items.map(coin => (
          <PriceTile key={coin.Id} coin={coin} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.favorites.items,
});

export default connect(mapStateToProps)(PriceGrid);
