import styled, { css } from 'styled-components';
import { SelectableTile } from '../../styles/tile';
import { fontSizeNormal, fontSizeBig, greenBoxShadow } from '../../styles/shared';

export const Container = styled(SelectableTile)`
  ${props => props.selected
    && css`
      ${greenBoxShadow}
      pointer-events: none;
    `}
  ${props => props.index > 4
    && css`
      height: 55px;
    `}
`;

export const CoinHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TickerPrice = styled.div`
  ${props => (props.index > 4
    ? css`
          ${fontSizeNormal}
        `
    : css`
          ${fontSizeBig}
        `)}
`;

export const ChangePct = styled.div`
  ${props => (props.red
    ? css`
          color: red;
        `
    : css`
          color: green;
        `)}
`;
