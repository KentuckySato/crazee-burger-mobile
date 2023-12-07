import styled from 'styled-components/native'
import { theme } from '../../theme/index'
import { Image, StyleSheet, Text, View } from 'react-native'

type LogoProps = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Logo({ className, onClick }: LogoProps) {
    return (
        <LogoStyled>
            <TextStyled>Crazee</TextStyled>
            <ImageStyled source={require('../../res/images/logo-burger.png')} />
            <TextStyled>Burger</TextStyled>
        </LogoStyled>
    )
}

const LogoStyled = styled.View`
    display: flex;
    flex-direction: row;
    max-height: "100%";
    min-width: 200px;
    align-items: center;
    transform: scale(1.5);
    margin-bottom: ${theme.spacing.lg};
`

const ImageStyled = styled.Image`
    object-fit: contain;
    /* object-position: center center; */
    height: 60px;
    width: 80px;
    margin: 0px 5px;
`

const TextStyled = styled.Text`
    /* display: inline; */
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1px;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: ${theme.fonts.family.stylish};
`