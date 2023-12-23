import styled from "styled-components/native"
import { theme } from "../../../../../../theme"
import BasketHeader from "./BasketHeader"
import { calculcateSumToPay } from "./basketHelper"
import { useContext } from "react"
import { OrderContext } from "../../../../../../context/OrderContext"
import { formatPrice } from "../../../../../../utils/maths"
import CasinoEffect from "../../../../../shared/CasinoEffect"
import { Text } from "react-native"

export default function Total() {
    const { basket, menu } = useContext(OrderContext)
    const sumToPay = calculcateSumToPay(basket, menu)

    return (
        <BasketHeader>
            <TotalStyled>
                <Text>Total</Text>
                <CasinoEffect count={formatPrice(sumToPay)} />
            </TotalStyled>
        </BasketHeader>
    )
}

const TotalStyled = styled.View`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
    letter-spacing: 2px;

    .amount {
        font-weight: ${theme.fonts.weights.bold};
    }
`;

