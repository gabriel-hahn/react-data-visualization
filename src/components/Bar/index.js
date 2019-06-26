import React, { Component } from "react";

import ControlButton from "../ControlButton";

import { Container, Logo } from "./styles";

const VALUES = {
    DASHBOARD: "Dashboard",
    SETTINGS: "Settings"
};

class Bar extends Component {
    state = {
        current: VALUES.DASHBOARD
    };

    handleClick = name => {
        this.setState({ current: name });
    };

    render() {
        return (
            <Container>
                <Logo>CryptoDash</Logo>
                <div />
                <ControlButton
                    select={this.handleClick}
                    name={VALUES.DASHBOARD}
                    active={this.state.current === VALUES.DASHBOARD}
                />
                <ControlButton
                    select={this.handleClick}
                    name={VALUES.SETTINGS}
                    active={this.state.current === VALUES.SETTINGS}
                />
            </Container>
        );
    }
}

export default Bar;
