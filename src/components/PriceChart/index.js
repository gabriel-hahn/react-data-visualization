import highChartsConfig, { highChartsTheme } from '../../config/HighchartsConfig';
import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts';
import { Tile } from '../../styles/tile';

import { Container } from './styles';

ReactHighCharts.Highcharts.setOptions(highChartsTheme);

export default class PriceChart extends Component {
  render() {
    return (
      <Container>
        <Tile>
          <ReactHighCharts config={highChartsConfig()} />
        </Tile>
      </Container>
    );
  }
}
