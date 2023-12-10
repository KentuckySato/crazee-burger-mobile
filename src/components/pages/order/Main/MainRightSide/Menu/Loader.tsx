import styled from "styled-components/native"
import { theme } from "../../../../../../theme"
import { Text } from "react-native"

export default function Loader() {
    return (
        <LoaderStyled>
            <Text>Chargement en cours...</Text>
        </LoaderStyled>
    )
}

const LoaderStyled = styled.View`
    background-color: ${theme.colors.background_white};
    /* box-shadow: ${theme.shadows.strong}; */
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        text-align: center;
        font-family: ${theme.fonts.family.stylish};
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
    }
`
