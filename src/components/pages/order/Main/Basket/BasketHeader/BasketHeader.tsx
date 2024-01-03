import { PropsWithChildren } from "react"
import styled from "styled-components/native"
import { theme } from "../../../../../../theme"

export default function BasketHeader({ children }: PropsWithChildren) {
    return <BasketHeaderStyled>{children}</BasketHeaderStyled>
}

const BasketHeaderStyled = styled.View`
    flex: 1;
    justify-content: center;
    background: ${theme.colors.background_dark};
    padding: 0 16px;
`
