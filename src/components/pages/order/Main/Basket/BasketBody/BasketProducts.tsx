import { useCallback, useContext } from "react"
import styled from "styled-components/native"
import { BASKET_MESSAGE, IMAGE_BY_DEFAULT, ProductId, ProductQuantity } from "../../../../../../enums/product"
import BasketCard from "./BasketCard"
import { findObjectById } from "../../../../../../utils/array"
import { OrderContext } from "../../../../../../context/OrderContext"
import { basketProductsAnimation } from "../../../../../../theme/animations"
import { formatPrice } from "../../../../../../utils/maths"
import { convertStringToBoolean } from "../../../../../../utils/string"
import { theme } from "../../../../../../theme"
import Sticker from "../../../../../shared/Sticker"
import { Animated, Text, View } from "react-native"
import Separator from "../../../../../shared/Separator"

export default function BasketProducts() {

    const {
        username,
        menu,
        basket,
        isModeAdmin,
        productSelected,
        handleProductSelected,
        handleDeleteBasketProduct,
        handleAddBasketProduct
    } = useContext(OrderContext)

    const handleIncrementButton = (idProductToAdd: ProductId) => {
        handleAddBasketProduct(idProductToAdd, username)
    }

    const handleOnDelete = (event: React.MouseEvent<Element, MouseEvent>, idOfProduct: ProductId) => {
        event.stopPropagation()
        handleDeleteBasketProduct(idOfProduct, username)
    }

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelectBasketProduct = (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return
        handleProductSelected(idOfProductSelected)
    }

    const renderBasketItem = ({ item }: { item: ProductQuantity }) => {

        // Find the product in the menu to get the informations (title, price, imageSource)
        const menuProduct = findObjectById(item.id, menu)
        if (!menuProduct) return <Text>Product not found</Text>

        const displayedPrice = convertStringToBoolean(menuProduct.isAvailable)
            ? formatPrice(menuProduct.price)
            : BASKET_MESSAGE.NOT_AVAILABLE

        return (
            <CardContainer>
                {convertStringToBoolean(menuProduct.isPublicised) && <StickerNew />}
                <BasketCard
                    key={item.id}
                    title={menuProduct.title}
                    quantity={item.quantity}
                    imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_BY_DEFAULT}
                    isSelected={productSelected.id === item.id && isModeAdmin}
                    isClickable={isModeAdmin}
                    onSelect={() => handleOnSelectBasketProduct(item.id)}
                    onDelete={(event) => handleOnDelete(event, item.id)}
                    onIncrementProduct={() => handleIncrementButton(item.id)}
                    className="card"
                    price={displayedPrice}
                />
            </CardContainer>
        )
    }

    const renderSeparator = useCallback(() => {
        return <Separator />
    }, [])

    return (
        <BasketProductsStyled>
            <Animated.FlatList
                data={basket}
                renderItem={renderBasketItem}
                ItemSeparatorComponent={renderSeparator}
                style={{ display: 'flex', flexDirection: 'column' }}
                refreshing={false}
                onRefresh={() => true}
            />
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.View`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 90%;

    /* ${basketProductsAnimation} */
`

const CardContainer = styled.View`
    position: relative;
    box-sizing: border-box;
    padding: 10px 10px;

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
