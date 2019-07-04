import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  margin-bottom: 40px;
  padding: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

export const Logo = styled.div`
  font-size: 1.5em;
`;

export const RouterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 20px;
  ${props => props.active
    && css`
      border-bottom: 2px solid #fff;
    `}
`;

Button.displayName = "Button";
