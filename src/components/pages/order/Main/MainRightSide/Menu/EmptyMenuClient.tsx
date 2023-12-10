import { styled } from "styled-components/native"
import { theme } from "../../../../../../theme"
import { Text } from "react-native"

export default function EmptyMenuClient() {
    return (
        <EmptyMenuClientStyled>
            <Text>Victime de notre succès ! :D</Text>
            <Text>De nouvelles recettes sont en cours de préparation.</Text>
            <Text>À très vite !</Text>
        </EmptyMenuClientStyled>
    )
}

const EmptyMenuClientStyled = styled.View`
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.strong};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center; // permet de diminuer la largeur du bouton resetMenu

    position: absolute;
    inset: 0px;

    .title,
    .description {
        text-align: center;
        font-family: "Amatic SC", cursive;
        color: ${theme.colors.greyBlue};
    }

    .title {
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.semiBold};
    }

    .description {
        font-size: ${theme.fonts.size.P4};
        margin-top: 20px;
    }
`
