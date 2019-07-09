import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Notification } from '../../utils/Notification';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import { Container, Button } from './styles';

class ConfirmButton extends Component {
  static propTypes = {
    getPricesRequest: PropTypes.func.isRequired,
  };

  handleButtonClick = () => {
    const { favorites, getPricesRequest } = this.props;

    if (favorites.length > 0) {
      localStorage.setItem('cryptodash@dataFavorites', JSON.stringify(favorites));
      getPricesRequest();

      Notification.success();
    } else {
      localStorage.removeItem('cryptodash@dataFavorites');
      Notification.favoriteIsMandatory();
    }
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
