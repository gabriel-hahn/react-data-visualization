import React, { Component } from 'react';

import ControlButton from '../ControlButton';

import { Container, Logo, RouterLink } from './styles';

const VALUES = {
  DASHBOARD: 'Dashboard',
  SETTINGS: 'Settings',
};

class Bar extends Component {
  state = {
    firstVisit: false,
    current: VALUES.DASHBOARD,
  };

  componentDidMount() {
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

    if (!cryptoDashData) {
      this.setState({ firstVisit: true, current: VALUES.SETTINGS });
    }
  }

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
          <ControlButton
            select={() => this.handleClick(VALUES.DASHBOARD)}
            name={VALUES.DASHBOARD}
            active={current === VALUES.DASHBOARD}
          />
        </RouterLink>
        <RouterLink to="/settings">
          <ControlButton
            select={() => this.handleClick(VALUES.SETTINGS)}
            name={VALUES.SETTINGS}
            active={current === VALUES.SETTINGS}
          />
        </RouterLink>
      </Container>
    );
  }
}

export default Bar;
