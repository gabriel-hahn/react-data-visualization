import styled from 'styled-components';
import { backgroundColorDark, fontSizeMedium } from '../../styles/shared';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 170px 1fr;
  padding-bottom: 40px;
`;

export const SearchInput = styled.input`
  ${backgroundColorDark}
  ${fontSizeMedium}
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  align-self: center;
  justify-self: left;
`;
