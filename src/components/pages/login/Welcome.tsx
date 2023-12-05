import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
    return (
        <WelcomeStyled>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
        </WelcomeStyled>
    )
}

const WelcomeStyled = styled.div`
    h1, h2 {
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.bold};
    }

    h1 {
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        font-size: ${theme.fonts.size.P4};
        margin: 20px 10px 10px;
    }

    hr {
        border: 1.5px solid ${theme.colors.loginLine};
        margin-bottom: ${theme.gridUnit * 5}px;
    }
`;
