import styled from 'styled-components/native'
import { theme } from '../../theme/index'

export default function Logo() {
    const IMG_LOGO = require('../../res/images/logo-burger.png')
    return (
        <LogoStyled>
            <TextStyled>Crazee</TextStyled>
            <ImageStyled source={IMG_LOGO} />
            <TextStyled>Burger</TextStyled>
        </LogoStyled>
    )
}

const LogoStyled = styled.View`
    display: flex;
    flex-direction: row;
    max-height: 100%;
    min-width: 200px;
    align-items: center;
    transform: scale(1.5);
    margin-bottom: ${theme.spacing.lg};
`

const ImageStyled = styled.Image`
    object-fit: contain;
    height: 60px;
    width: 70px;
    margin: 0px 3px;
`

const TextStyled = styled.Text`
    text-align: center;
    color: ${theme.colors.primary};
    font-size: 46px;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: ${theme.fonts.family.stylish};
`