import styled , {css} from "styled-components/native";

export const Container = styled.TouchableOpacity `
    ${({theme}) => css`
        background-color: ${theme.colors.purple};
        border-radius: 20px;
        margin: 10px 0;
        padding: 20px;
        flex-direction:row;
        justify-content: space-between
    `}
`

export const ContentText = styled.View`
    flex-direction: column;
    justify-content:space-between;
`

export const ContentHeaderCard = styled.View`
    background-color: ${({theme}) => theme.colors.blue};
    border-radius: 10px;
    align-items:center;
    justify-content:center;
    padding: 5px;
`
export const ContentGenderAndOrigin = styled.View`
    background-color: ${({theme}) => theme.colors.gold};
    border-radius: 10px;
    align-items:center;
    justify-content:center;
`

export const Gender = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-weight:bold;
    text-align:center;
    border-radius: 10px;
    padding: 5px;
    width: 120px;
`

export const CharName = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-weight:bold;
`

export const Specie = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-weight:bold;
`

export const Origin = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-weight:bold;
    text-align:center;
    border-radius: 10px;
    padding: 5px;
    width: 120px;
`

export const ContentImage = styled.View`

`
export const Avatar = styled.Image`
    width:120px;
    height:120px;
    border-radius: 60px;
`