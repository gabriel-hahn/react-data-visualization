import styled from 'styled-components';
import { fontSizeMedium, greenBoxShadow, colorTertiary } from '../../styles/shared';

export const Container = styled.div`
  display: grid;
  justify-content: center;
`;

export const Button = styled.div`
  margin: 50px;
  color: ${colorTertiary};
  ${fontSizeMedium}
  cursor: pointer;

  &:hover {
    ${greenBoxShadow}
  }
`;
