import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";
import { Card } from "../../components/Card";
import api from "../../services/api";
import { Container } from "./styles";
import LottieView from "lottie-react-native";
import animateloading from "./loading.json";
import AnimatedLottieView from "lottie-react-native";

export function Home() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState<Boolean>(true);

  async function fetchCharacter() {
    try {
      const { data } = await api.get("/character");
      const { results } = data;
      if (results?.length > 0) {
        setCharacter(results);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setInterval(fetchCharacter, 3500);

    // console.log(character.map(item => item));
  }, []);

  return (
    <>
      <Container>
        {loading ? (
        <AnimatedLottieView style={style.loading} autoPlay source={animateloading} loop/>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {character.map((item, i) => {
              return <Card character={item} key={i} />;
            })}
          </ScrollView>
        )}
      </Container>
    </>
  );
}

const style = StyleSheet.create({
  loading: {
    
  },
});
