import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import { Container, Button } from './styles';

class ConfirmButton extends Component {
  handleButtonClick = () => {
    const { favorites, getPricesRequest } = this.props;
    localStorage.setItem('dataFavorites', JSON.stringify(favorites));

    getPricesRequest();
  };

  render() {
    return (
      <Container>
        <Button onClick={this.handleButtonClick}>
          <h2>Confirm Favorites</h2>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.items || [],
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmButton);
