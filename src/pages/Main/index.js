import React, { Component } from "react";

import Bar from "../../components/Bar";
import ConfirmButton from "../../components/ConfirmButton";

import { Container, Title } from "./styles";

class Main extends Component {
    render() {
        return (
            <Container>
                <Bar />
                <Title>
                    Welcome to CryptoDash, please select your favorite coins to
                    begin
                </Title>
                <ConfirmButton />
            </Container>
        );
    }
}

export default Main;
