import React, { Component } from "react";

import { Container, Button } from "./styles";

class ConfirmButton extends Component {
    render() {
        return (
            <Container>
                <Button>
                    <h2>Confirm Favorites</h2>
                </Button>
            </Container>
        );
    }
}

export default ConfirmButton;
