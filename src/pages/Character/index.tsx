import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import api from "../../services/api";
import { Container } from "./styles";
import animateloading from "./loading.json";
import AnimatedLottieView from "lottie-react-native";

export function Character({route}){
    const [singleCharacter, setSingleCharacter] = useState([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const character = JSON.parse(route.params.person)
    

  useEffect(() => {
    setInterval(() => setLoading(false), 3500)
  }, [])

    console.log("Character", character)
    return(
      <>
      <Container>
        {loading ? (
        <AnimatedLottieView  autoPlay source={animateloading} loop/>
        ) : (
          <Text style={styles.container}>{character.name}</Text>
        )}
      </Container>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  }
});
  