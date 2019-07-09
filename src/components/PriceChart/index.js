import React from 'react';
import { connect } from 'react-redux';
import ReactHighCharts from 'react-highcharts';
import PropTypes from 'prop-types';
import highChartsConfig, { highChartsTheme } from '../../config/HighchartsConfig';

import { Tile } from '../../styles/tile';
import { Container } from './styles';

ReactHighCharts.Highcharts.setOptions(highChartsTheme);

const PriceChart = ({ currentFavorite }) => (
  <Container>
    <Tile>
      <ReactHighCharts config={highChartsConfig(currentFavorite)} />
    </Tile>
  </Container>
);

PriceChart.propTypes = {
  currentFavorite: PropTypes.shape({
    Name: PropTypes.string.isRequired,
  }),
};

PriceChart.defaultProps = {
  currentFavorite: null,
};

const mapStateToProps = state => ({
  currentFavorite: state.favorites.current,
});

export default connect(mapStateToProps)(PriceChart);
