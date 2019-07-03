import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Button } from './styles';

class ConfirmButton extends Component {
  handleButtonClick = () => {
    const { favorites } = this.props;
    localStorage.setItem('dataFavorites', JSON.stringify(favorites));
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
  favorites: state.coins.favorites || [],
});

export default connect(mapStateToProps)(ConfirmButton);
