import styled , {css} from "styled-components/native";

export const Container = styled.SafeAreaView`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.lightgreen};
        padding: 30px 20px 20px;
    `}
`

export const WrapperAnimation = styled.View`
    
`

