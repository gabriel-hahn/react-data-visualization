import React, { Component } from 'react';

import { Container, Logo, RouterLink, Button } from './styles';

const VALUES = {
  DASHBOARD: 'Dashboard',
  SETTINGS: 'Settings',
};

class Bar extends Component {
  state = {
    current: VALUES.DASHBOARD,
  };

  componentDidMount() {
    const cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

    if (!cryptoDashData) {
      this.setState({ current: VALUES.SETTINGS });
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
          <Button
            onClick={() => this.handleClick(VALUES.DASHBOARD)}
            active={current === VALUES.DASHBOARD}
          >{VALUES.DASHBOARD}</Button>
        </RouterLink>
        <RouterLink to="/settings">
          <Button
            onClick={() => this.handleClick(VALUES.SETTINGS)}
            active={current === VALUES.SETTINGS}
          >{VALUES.SETTINGS}</Button>
        </RouterLink>
      </Container>
    );
  }
}

export default Bar;
