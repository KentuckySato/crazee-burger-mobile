import { styled } from "styled-components/native"
// import Button from "../../../../../shared/@Button"
import { theme } from "../../../../../../theme"
import { Text } from "react-native"

export default function EmptyMenuAdmin({ onReset }: { onReset: () => void }) {
    return (
        <EmptyMenuAdminStyled>
            <Text>Le menu est vide ?</Text>
            <Text>Cliquez ci-dessous pour le réinitialiser</Text>
            {/* <Button label={"Générer de nouveaux produits"} onClick={onReset} type="button" /> */}
        </EmptyMenuAdminStyled>
    )
}

const EmptyMenuAdminStyled = styled.View`
    background-color: ${theme.colors.background_white};
    /* box-shadow: ${theme.shadows.strong}; */
    /* border-bottom-right-radius: ${theme.borderRadius.extraRound}; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; // permet de diminuer la largeur du bouton resetMenu */

    /* position: absolute;
    inset: 0px; */

    /* .title,
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

    button {
        margin-top: 30px;
        font-size: ${theme.fonts.size.XS};
        width: auto;
    } */
`
