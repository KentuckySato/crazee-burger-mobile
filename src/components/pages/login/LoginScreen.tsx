import styled from "styled-components/native"
import Logo from "../../shared/Logo"
import LoginForm from "./LoginForm"
import { ImageBackground } from "react-native"

export default function LoginScreen() {
    return (
        <LoginScreenStyled style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground imageStyle={{
                resizeMode: "cover",
                objectFit: "contain",
            }} style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: -1,
            }} source={require('../../../res/images/burger-background.jpg')} resizeMode="cover"></ImageBackground>
            <Logo className={"logo-login-page"} />
            <LoginForm />
        </LoginScreenStyled>
    )
}

const LoginScreenStyled = styled.View`
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`