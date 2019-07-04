import styled, { css } from 'styled-components';
import { SelectableTile } from '../../styles/tile';
import { fontSizeBig, greenBoxShadow } from '../../styles/shared';

export const Container = styled(SelectableTile)`
  ${props => props.selected
    && css`
      ${greenBoxShadow}
      pointer-events: none;
    `}
`;

export const CoinHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TickerPrice = styled.div`
  ${fontSizeBig}
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
