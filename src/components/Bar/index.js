import React, { Component } from "react";

import ControlButton from "../ControlButton";

import { Container, Logo } from "./styles";

class Bar extends Component {
    render() {
        return (
            <Container>
                <Logo>CryptoDash</Logo>
                <div />
                <ControlButton name="Dashboard" active />
                <ControlButton name="Settings" />
            </Container>
        );
    }
}

export default Bar;
