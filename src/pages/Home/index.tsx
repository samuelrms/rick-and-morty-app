import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, ScrollView, StyleSheet } from "react-native";
import { Card } from "../../components/Card";
import api from "../../services/api";
import { Container } from "./styles";
import AnimatedLottieView from "lottie-react-native";
import loader from './loader.json'

export function Home(){
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState<Boolean>()
    
    async function fetchCharacter() {
        try{
            const {data} = await api.get('/character')
             const {results} = data
             setCharacter(results)
             console.log("Inicio", results);
             
        }
        catch(err){
            console.log(err)
            setLoading(loading)
        }
    }

    useEffect(() => {
        fetchCharacter()
        // console.log(character.map(item => item));
        
    }, [])
    
    return(
        <>
            <Container>
                {loading ? (
                    <Text>Loading</Text>
                ): (
                    <ScrollView showsVerticalScrollIndicator={false}>
                    {character.map((item, i) => {
                        return(
                        <Card character={item} key={i}/> 
                        )
                    })}
                    </ScrollView>
                )}
            </Container>
        </>
        
    )    
}

