import styled, { css } from "styled-components";

export const Button = styled.div`
    cursor: pointer;
    ${props =>
        props.active &&
        css`
            text-shadow: 0px 0px 60px #03ff03;
        `}
`;
