import styled , {css} from "styled-components/native";

export const Container = styled.SafeAreaView`
    ${({theme}) => css`
        background-color: ${theme.colors.lightgreen};
        padding: 30px 20px 20px;
    `}
`