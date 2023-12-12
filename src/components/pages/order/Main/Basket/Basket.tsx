import styled from "styled-components/native"
import Total from "./BasketHeader/Total"
import BasketFooter from "./BasketFooter"
import BasketBody from "./BasketBody/BasketBody"
import { theme } from "../../../../../theme"
import { Text, View } from "react-native"

export default function Basket() {
    return (
        <BasketStyled>
            <View>
                <Text>Basket</Text>
                {/* <Total />
                <BasketBody />
                <BasketFooter /> */}
            </View>
            {/* <FaShoppingBasket className="basket-icon" onClick={handleShowBasketMobile} /> */}
        </BasketStyled>
    )
}

const BasketStyled = styled.View`
    background: ${theme.colors.blue};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    height: 100%;

    /* .header-footer {
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
    } */
`
