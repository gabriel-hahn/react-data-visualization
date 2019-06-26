import React, { Component } from "react";

import { Container, Button } from "./styles";

class ConfirmButton extends Component {
    render() {
        const { click } = this.props;

        return (
            <Container>
                <Button onClick={click}>
                    <h2>Confirm Favorites</h2>
                </Button>
            </Container>
        );
    }
}

export default ConfirmButton;
