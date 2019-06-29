import React from 'react';

import { Container, Button } from './styles';

const ConfirmButton = ({ click }) => (
  <Container>
    <Button onClick={click}>
      <h2>Confirm Favorites</h2>
    </Button>
  </Container>
);

export default ConfirmButton;
