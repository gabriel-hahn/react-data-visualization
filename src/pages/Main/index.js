import React, { Component } from "react";

import Bar from "../../components/Bar";

import { Container, Title } from "./styles";

class Main extends Component {
    render() {
        return (
            <Container>
                <Bar />
                <Title>Welcome to CryptoDash</Title>
            </Container>
        );
    }
}

export default Main;
