import { StyleSheet, Text, View } from "react-native"
import { theme } from "../../../theme"
import styled from "styled-components/native"

export default function Welcome() {
    return (
        <WelcomeStyled>
            <H1Styled>Bienvenue chez nous !</H1Styled>
            <Separator></Separator>
            <H2Styled>Connectez-vous</H2Styled>
        </WelcomeStyled>
    )
}

const WelcomeStyled = styled.View`
    display: 'flex';
    max-height: '100%';
    color: ${theme.colors.primary};
    min-width: 200px;
`

const H1Styled = styled.Text`
    text-align: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
`
const H2Styled = styled.Text`
    text-align: center;
    margin: 20px 10px 10px;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
`
const Separator = styled.View`
    border: 1.5px solid ${theme.colors.loginLine};
    margin-top: ${theme.gridUnit * 5}px;
    margin-bottom: ${theme.gridUnit * 5}px;
`
