import { styled } from "styled-components/native"
import { theme } from "../../../../../../theme"
import { Text } from "react-native"

export default function EmptyMenuClient() {
    return (
        <EmptyMenuClientStyled>
            <TitleText>Victime de notre succès ! :D</TitleText>
            <DescriptionText>De nouvelles recettes sont en cours de préparation.</DescriptionText>
            <DescriptionText>À très vite !</DescriptionText>
        </EmptyMenuClientStyled>
    )
}

const EmptyMenuClientStyled = styled.View`
    /* height: 100%; */
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex: 1;
    background-color: ${theme.colors.background_white};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    inset: 0px;
`

const TitleText = styled.Text`
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
    text-align: center;
    color: ${theme.colors.greyBlue};
`
const DescriptionText = styled.Text`
    font-size: ${theme.fonts.size.P3};
    font-family: "Amatic SC";
    color: ${theme.colors.greyBlue};
    margin-top: 20px;
`
