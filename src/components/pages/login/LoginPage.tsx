import styled from "styled-components/native"
import Logo from "../../shared/Logo"
import LoginForm from "./LoginForm"
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native"

export default function LoginPage() {
    return (

        <LoginPageStyled>
            <ImageBackground imageStyle={{
                resizeMode: "cover",
                opacity: 0.5,
                objectFit: "contain",
            }} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: -1,
            }} source={require('../../../res/images/burger-background.jpg')} resizeMode="cover"></ImageBackground>
            <Logo className={"logo-login-page"} />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.View`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`