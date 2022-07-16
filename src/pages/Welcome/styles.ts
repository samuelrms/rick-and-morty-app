import styled, {css} from "styled-components";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.white}
    `}
`

export const Content = styled.View`
     ${({theme}) => css`
        height: 70%;
        background-color: ${theme.colors.purple}
        align-items:center;
        justify-content:center;
        
    `}

`

export const WrapperText = styled.View`
    ${({theme}) => css`
        width :90%;
        height: 100px;
        background-color: ${theme.colors.darkpurple};
        border-radius: 100px;
        margin-top: 50px;
       align-items:center;
       justify-content:center;
       padding: 5%;
    `}
`

export const Text = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        font-weight:bold;
        color: ${theme.colors.white};
        text-align:center;
`}
`

export const Footer = styled.View`
     ${({theme}) => css`
        height: 30%;
        background-color: ${theme.colors.lightgreen};
        align-items: center;
       
        
`}

`
