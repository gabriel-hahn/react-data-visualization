import React, { Component } from "react";

import { Button } from "./styles";

class ControlButton extends Component {
    render() {
        return <Button active={this.props.active}>{this.props.name}</Button>;
    }
}

export default ControlButton;
