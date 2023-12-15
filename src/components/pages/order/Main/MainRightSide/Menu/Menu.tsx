import { useCallback, useContext, useId, useState } from "react"
import { styled } from "styled-components/native"
import Card from "../../../../../shared/Card"
import { theme } from "../../../../../../theme"
import { formatPrice } from "../../../../../../utils/maths"
import { OrderContext } from "../../../../../../context/OrderContext"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT, IMAGE_OUT_OF_STOCK, Product, ProductId } from "../../../../../../enums/product"
import { isEmpty } from "../../../../../../utils/array"
import Loader from "./Loader"
import { convertStringToBoolean } from "../../../../../../utils/string"
import { Animated, RefreshControl, View } from "react-native"
import Separator from "../../../../../shared/Separator"

export default function Menu() {
    const {
        username,
        isModeAdmin,
        menu,
        handleDeleteMenuProduct,
        resetMenu,
        productSelected,
        setProductSelected,
        handleProductSelected,
        titleFieldRef,
        handleAddBasketProduct,
        handleDeleteBasketProduct
    } = useContext(OrderContext)

    const [refreshing, setRefreshing] = useState(false)

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelect = (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return
        handleProductSelected(idOfProductSelected)
    }

    const handleCardDelete = (event: React.MouseEvent<Element, MouseEvent>, idProductToDelete: ProductId) => {
        event.stopPropagation()

        handleDeleteMenuProduct(idProductToDelete, username)
        handleDeleteBasketProduct(idProductToDelete, username)

        idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)

        titleFieldRef.current?.focus()
    }

    const handleAddButton = (event: React.MouseEvent<Element, MouseEvent>, idProductToAdd: ProductId) => {
        event.stopPropagation()
        handleAddBasketProduct(idProductToAdd, username)
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    // Render
    if (menu === undefined) return <Loader />

    // if (isEmpty(menu)) {
    //     if (!isModeAdmin) return <EmptyMenuClient />
    //     return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
    // }

    const renderSeparator = useCallback(() => {
        return <Separator />
    }, [])

    const renderCardItem = useCallback(({ item }: { item: Product }) => (
        <Card
            id={item.id}
            title={item.title}
            imageSource={item.imageSource ? item.imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(item.price)}
            isHoverable={isModeAdmin}
            isSelected={productSelected.id === item.id && isModeAdmin}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, item.id)}
            onSelect={() => handleOnSelect(item.id)}
            onAdd={(event) => handleAddButton(event, item.id)}
            overlapImageSource={IMAGE_OUT_OF_STOCK}
            isOverlapImageVisible={!convertStringToBoolean(item.isAvailable)}
        />
    ), [])

    return (
        <MenuStyled>
            <Animated.FlatList
                refreshing={false}
                onRefresh={() => true}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                style={{ display: 'flex', flexDirection: 'column' }}
                data={menu}
                ItemSeparatorComponent={renderSeparator}
                ListEmptyComponent={isModeAdmin ? <EmptyMenuAdmin onReset={() => resetMenu(username)} /> : <EmptyMenuClient />}
                renderItem={renderCardItem}
            />
        </MenuStyled >
    )
}

const MenuStyled = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
`