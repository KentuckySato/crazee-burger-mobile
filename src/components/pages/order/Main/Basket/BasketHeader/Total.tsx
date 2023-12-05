import styled from "styled-components";
import { theme } from "../../../../../../theme";
import BasketHeader from "./BasketHeader";
import { calculcateSumToPay } from "./basketHelper";
import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import CasinoEffect from "../../../../../shared/CasinoEffect";

export default function Total() {
    const { basket, menu } = useContext(OrderContext)
    const sumToPay = calculcateSumToPay(basket, menu)

    return (
        <BasketHeader>
            <TotalStyled>
                <span className="total">Total</span>
                <CasinoEffect count={formatPrice(sumToPay)} className="amount" />
            </TotalStyled>
        </BasketHeader>
    )
}

const TotalStyled = styled.div`
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

