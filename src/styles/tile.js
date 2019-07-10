import styled, { css } from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from './shared';

export const Tile = styled.div`
  ${subtleBoxShadow};
  ${lightBlueBackground};
  padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  ${props => props.selected
    && css`
      ${greenBoxShadow}
    `}

  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

SelectableTile.displayName = 'SelectableTile';
