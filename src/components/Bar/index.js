import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as BarActions } from "../../store/ducks/bar";

import ControlButton from "../ControlButton";

import { Container, Logo } from "./styles";

const VALUES = {
    DASHBOARD: "Dashboard",
    SETTINGS: "Settings"
};

class Bar extends Component {
    state = {
        firstVisit: false
    };

    componentDidMount() {
        const { setCurrent } = this.props;

        const cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));

        if (!cryptoDashData) {
            this.setState({ firstVisit: true });
            setCurrent(VALUES.SETTINGS);
        }
    }

    handleClick = name => {
        const { setCurrent } = this.props;

        setCurrent(name);
    };

    render() {
        const { current } = this.props;

        return (
            <Container>
                <Logo>CryptoDash</Logo>
                <div />
                <ControlButton
                    select={() => this.handleClick(VALUES.DASHBOARD)}
                    name={VALUES.DASHBOARD}
                    active={current === VALUES.DASHBOARD}
                />
                <ControlButton
                    select={() => this.handleClick(VALUES.SETTINGS)}
                    name={VALUES.SETTINGS}
                    active={current === VALUES.SETTINGS}
                />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(BarActions, dispatch);

const mapStateToProps = state => ({
    current: state.bar.current
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bar);
