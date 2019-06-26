import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CoinsActions } from "../../store/ducks/coins";

import Bar from "../../components/Bar";
import ConfirmButton from "../../components/ConfirmButton";

import { Container, Title } from "./styles";

class Main extends Component {
    state = {
        showTitle: true
    };

    componentDidMount() {
        const { getCoins } = this.props;

        getCoins();
    }

    handleConfirmButtonClick = () => {
        this.setState({ showTitle: false });
    }

    render() {
        const { showTitle } = this.state;

        return (
            <Container>
                <Bar />
                {showTitle && (<Title>
                    Welcome to CryptoDash, please select your favorite coins to
                    begin
                </Title>)}
                <ConfirmButton click={this.handleConfirmButtonClick}/>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(CoinsActions, dispatch);

export default connect(null, mapDispatchToProps)(Main);
