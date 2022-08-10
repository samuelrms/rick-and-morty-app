import styled, {css} from "styled-components";


export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.lightgreen};   
    `}
`