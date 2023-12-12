import styled from "styled-components/native"
import { theme } from "../../../../../../theme"
import { BASKET_MESSAGE } from "../../../../../../enums/product"

type EmptyBasketProps = {
    isLoading: boolean
}

export default function EmptyBasket({ isLoading }: EmptyBasketProps) {
    return (
        <EmptyBasketStyled>
            <EmptyMessage>
                {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
            </EmptyMessage>
        </EmptyBasketStyled>
    )
}

const EmptyBasketStyled = styled.View`
    flex: 1;
    background: ${theme.colors.background_white};
    /* box-shadow: ${theme.shadows.basket}; */
`

const EmptyMessage = styled.Text`
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
`
