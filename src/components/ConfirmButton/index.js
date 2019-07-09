import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as FavoritesActions } from '../../store/ducks/favorites';

import { Container, Button } from './styles';

class ConfirmButton extends Component {
  static propTypes = {
    getPricesRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        Name: PropTypes.string.isRequired,
      }),
    ),
  };

  static defaultProps = {
    favorites: null,
  };

  handleButtonClick = () => {
    const { favorites, getPricesRequest } = this.props;
    localStorage.setItem('cryptodash@dataFavorites', JSON.stringify(favorites));

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
