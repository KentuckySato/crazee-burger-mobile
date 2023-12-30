import styled from "styled-components/native"
import { theme } from "../../../../../../theme"
import { BASKET_MESSAGE } from "../../../../../../enums/product"
import { View } from "react-native"

type EmptyBasketProps = {
    isLoading: boolean
}

export default function EmptyBasket({ isLoading }: EmptyBasketProps) {
    return (
        <View>
            <EmptyMessage>
                {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
            </EmptyMessage>
        </View>
    )
}

const EmptyMessage = styled.Text`
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
`
