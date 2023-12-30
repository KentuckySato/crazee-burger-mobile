import { PropsWithChildren } from "react"
import styled from "styled-components/native"
import { theme } from "../../../../../../theme"

export default function BasketHeader({ children }: PropsWithChildren) {
    return <BasketHeaderStyled>{children}</BasketHeaderStyled>
}

const BasketHeaderStyled = styled.View`
    height: 70px;
    background: ${theme.colors.background_dark};
    padding: 0 16px;
    /* bottom: -10px; */
    /* position: relative; */
`
