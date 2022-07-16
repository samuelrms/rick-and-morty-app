import React from "react";
import { Container,
        Content,
        WrapperText,
        Text,
        Footer
} from "./styles";
import { Button } from "../../components/Button";
import AnimatedLottieView from "lottie-react-native";
import morty from './morty.json'

export function Welcome(){
    return(
        <Container>
            <Content>
                <AnimatedLottieView style={{width: 200}} autoPlay source={morty} loop/>
                <WrapperText>
                    <Text>Bem-vindo aqui você encontra curiosidades sobre os personagens
                        de Rick and Morty.
                    </Text>
                </WrapperText>
            </Content>
            <Footer>
            <Button title="Iniciar" />
            </Footer>
        </Container>
    )
}