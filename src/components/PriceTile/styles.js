import styled, { css } from 'styled-components';
import { SelectableTile } from '../../styles/tile';
import { fontSizeNormal } from '../../styles/shared';

export const Container = styled(SelectableTile)`
  ${props => props.compact
    && css`
      ${fontSizeNormal}
    `}
`;
