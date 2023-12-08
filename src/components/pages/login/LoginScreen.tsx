import styled from "styled-components/native"
import Logo from "../../shared/Logo"
import LoginForm from "./LoginForm"
import { ImageBackground, StyleProp, ViewStyle } from "react-native"
import DarkenView from "./DarkenView"

export default function LoginScreen() {
    const IMG_BACKGROUND = require('../../../res/images/burger-background.jpeg')
    const imageStyle: StyleProp<ViewStyle> = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    }

    return (
        <LoginScreenStyled style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground style={imageStyle} source={IMG_BACKGROUND} resizeMode="cover">
                <DarkenView />
            </ImageBackground>
            <Logo />
            <LoginForm />
        </LoginScreenStyled>
    )
}

const LoginScreenStyled = styled.View`
    height: "100%";
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`