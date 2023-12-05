import styled from "styled-components"
import { theme } from "../../../../../theme"
import BasketHeader from "./BasketHeader/BasketHeader"

export default function BasketFooter() {
    return (
        <BasketHeader className="header-footer">
            <BasketFooterStyled>
                <span>Codé avec ❤️ et React.JS</span>
            </BasketFooterStyled>
        </BasketHeader>
    )
}

const BasketFooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`