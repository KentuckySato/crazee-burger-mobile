import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import { styled } from "styled-components/native"
import { theme } from "../../../theme"
import { OrderContext, OrderContextType } from "../../../context/OrderContext"
import { useEffect, useRef, useState } from "react"
import { Product, ProductId } from "../../../enums/product"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { useMenu } from "../../../hooks/useMenu"
import { useBasket } from "../../../hooks/useBasket"
import { findObjectById } from "../../../utils/array"
// import { useParams } from "react-router-dom"
import { initializeUserSession } from "./helpers/initializeUserSession"
import { DEFAULT_USERNAME } from "../../../enums/user"
import { SafeAreaView, Text, View } from "react-native"
import { useRoute } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from "./Main/MainRightSide/Menu/Menu"

export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [newProduct, setNewProduct] = useState<Product>(EMPTY_PRODUCT)
    const [productSelected, setProductSelected] = useState<Product>(EMPTY_PRODUCT)
    const { params } = useRoute()
    const Tab = createBottomTabNavigator()

    const titleFieldRef = useRef<HTMLInputElement>(null)

    const { menu, setMenu, handleAddMenuProduct, handleDeleteMenuProduct, handleEditMenuProduct, resetMenu } = useMenu()
    const { basket, setBasket, handleAddBasketProduct, handleDeleteBasketProduct } = useBasket()

    // If username is undefined, set "Guest" as default value. This is a fallback for TypeScript and `yarn build`
    // const params = useParams()
    const username = params.username || DEFAULT_USERNAME
    // const username = DEFAULT_USERNAME

    const handleProductSelected = async (idOfProductSelected: ProductId) => {
        const productClickedOn = findObjectById(idOfProductSelected, menu)
        // eslint-disable-next-line @typescript-eslint/await-thenable
        await setIsCollapsed(false)
        // eslint-disable-next-line @typescript-eslint/await-thenable
        await setCurrentTabSelected("edit")
        // For TypeScript and `yarn build`, else this error occured "Argument of type 'Product | undefined' is not assignable to parameter of type 'Product'. Type 'undefined' is not assignable to type 'Product'."
        // Check if product was found and set the product
        if (productClickedOn) await setProductSelected(productClickedOn)
        titleFieldRef.current?.focus()
    }

    // useEffect(() => {
    //     initializeUserSession(username, setMenu, setBasket)
    // }, [])

    const orderContextValue: OrderContextType = {
        username,

        isModeAdmin,
        setIsModeAdmin,

        isCollapsed,
        setIsCollapsed,

        currentTabSelected,
        setCurrentTabSelected,

        menu,
        handleAddMenuProduct,
        handleDeleteMenuProduct,
        handleEditMenuProduct,
        resetMenu,

        newProduct,
        setNewProduct,

        productSelected,
        setProductSelected,
        handleProductSelected,

        titleFieldRef,

        basket,
        setBasket,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
    }

    return (
        <OrderContext.Provider value={orderContextValue}>
            <SafeAreaView>
                <OrderPageStyled>
                    <Container>
                        <Text>Hey, {username}</Text>
                        <Tab.Navigator screenOptions={{
                            headerShown: false,
                        }}>
                            <Tab.Screen name="Menu" component={Menu} />
                            <Tab.Screen name="Basket" component={() => <View><Text>My Basket</Text></View>} />
                            <Tab.Screen name="Profile" component={() => <View><Text>Profile</Text></View>} />
                        </Tab.Navigator>
                        {/* <Navbar /> */}
                        {/* <Main /> */}
                    </Container>
                </OrderPageStyled>
            </SafeAreaView>
        </OrderContext.Provider>
    )
}

const OrderPageStyled = styled.View`
    height: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */

    background-color: ${theme.colors.background_main};
    background-image: url("/images/pattern-burger.png");
    background-size: 200px 150px;
    background-repeat: repeat;
`

const Container = styled.View`
    flex: 1;
    height: 100%;
`
