import React from 'react'
import { Image, Text} from 'react-native'
import { Avatar, CharName, Container, ContentGender, ContentGenderAndOrigin, ContentHeaderCard, ContentImage, ContentText, Gender, Origin, Specie } from './styles'

export const Card = ({character}:any) => {
  return (
    <Container>
    <ContentText>
        <ContentHeaderCard>
        <CharName>{character.name}</CharName>
        <Specie>{character.species}</Specie>
        </ContentHeaderCard>
        <ContentGenderAndOrigin>
        <Origin>{character.origin.name === "Earth (Replacement Dimension)" ? "Earth" : character.origin.name }</Origin>
        <Gender>{character.gender}</Gender>
        </ContentGenderAndOrigin>
    </ContentText>
    <ContentImage>
        <Avatar source={{uri: character.image}}/>
    </ContentImage>
    </Container>
  )
}
