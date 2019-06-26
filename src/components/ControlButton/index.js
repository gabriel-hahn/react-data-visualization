import React, { Component } from "react";

import { Button } from "./styles";

class ControlButton extends Component {
    render() {
        const { select, name, active } = this.props;

        return (
            <Button onClick={() => select(name)} active={active}>
                {name}
            </Button>
        );
    }
}

export default ControlButton;
