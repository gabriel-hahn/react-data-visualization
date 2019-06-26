import styled, { css } from "styled-components";

export const Button = styled.div`
    cursor: pointer;
    width: 20px;
    ${props =>
        props.active &&
        css`
            border-bottom: 2px solid #fff;
        `}
`;
