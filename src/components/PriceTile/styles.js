import styled, { css } from 'styled-components';
import { SelectableTile } from '../../styles/tile';
import { fontSizeBig } from '../../styles/shared';

export const Container = styled(SelectableTile)``;

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
