import React from 'react'
import { Image, Text} from 'react-native'
import { Avatar, CharName, Container, ContentGenderAndOrigin, ContentHeaderCard, ContentImage, ContentText, Gender, Origin, Specie } from './styles'
import { useNavigation } from "@react-navigation/native";

export const Card = ({character, navigation}:any) => {
  const {navigate} = useNavigation()
  const handleNavigation = ()=>{
     navigate('Character', {person:character} )
  }
  // console.log("ID", id);

  return (
    <>
    <Container onPress={()=>{ navigation.navigate('Character', {person:JSON.stringify(character)})}}>
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
    </>
  )
}
