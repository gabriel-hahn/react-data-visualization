import React, { Component } from 'react';
import ReactHighCharts from 'react-highcharts';
import { Tile } from '../../styles/tile';
import highChartsConfig from '../../config/HighchartsConfig';

import { Container } from './styles';

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
