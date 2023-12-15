import { useContext } from "react"
import styled from "styled-components/native"
import { BASKET_MESSAGE, IMAGE_BY_DEFAULT, ProductId } from "../../../../../../enums/product"
import BasketCard from "./BasketCard"
import { findObjectById } from "../../../../../../utils/array"
import { OrderContext } from "../../../../../../context/OrderContext"
import { basketProductsAnimation } from "../../../../../../theme/animations"
import { formatPrice } from "../../../../../../utils/maths"
import { convertStringToBoolean } from "../../../../../../utils/string"
import { theme } from "../../../../../../theme"
import Sticker from "../../../../../shared/Sticker"
import { View } from "react-native"

export default function BasketProducts() {

    const {
        username,
        menu,
        basket,
        isModeAdmin,
        productSelected,
        handleProductSelected,
        handleDeleteBasketProduct
    } = useContext(OrderContext)

    const handleOnDelete = (event: React.MouseEvent<Element, MouseEvent>, idOfProduct: ProductId) => {
        event.stopPropagation()
        handleDeleteBasketProduct(idOfProduct, username)
    }

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelectBasketProduct = (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return
        handleProductSelected(idOfProductSelected)
    }

    return (
        <BasketProductsStyled>
            {basket.map(({ id, quantity }) => {
                // Find the product in the menu to get the informations (title, price, imageSource)
                const menuProduct = findObjectById(id, menu)
                if (!menuProduct) return

                const displayedPrice = convertStringToBoolean(menuProduct.isAvailable)
                    ? formatPrice(menuProduct.price)
                    : BASKET_MESSAGE.NOT_AVAILABLE

                return (
                    <CardContainer>
                        {convertStringToBoolean(menuProduct.isPublicised) && <StickerNew />}
                        <BasketCard
                            title={menuProduct.title}
                            quantity={quantity}
                            imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_BY_DEFAULT}
                            isSelected={productSelected.id === id && isModeAdmin}
                            isClickable={isModeAdmin}
                            onSelect={() => handleOnSelectBasketProduct(id)}
                            onDelete={(event) => handleOnDelete(event, id)}
                            className="card"
                            price={displayedPrice}
                        />
                    </CardContainer>
                )
            })}
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    /* ${basketProductsAnimation} */
`

const CardContainer = styled.View`
    position: relative;
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;

    &:first-child {
        margin-top: ${theme.spacing.md};
    }

    &:last-child {
        margin-bottom: ${theme.spacing.md};
    }

    .badge-new {
        position: absolute;
        z-index: 1;
        bottom: 10%;
        left: 21%;
    }
`

const StickerNew = styled.Text`
    position: absolute;
    z-index: 1;
    bottom: 10%;
    left: 21%;
`
