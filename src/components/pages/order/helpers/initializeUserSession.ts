import { getMenu } from "../../../../api/product"
import { ProductQuantity, Products } from "../../../../enums/product"
import { getLocalStorage } from "../../../../utils/window"

const initializeMenu = async (
    username: string,
    setMenu: (menu: Products) => void
) => {
    const menuReceived = await getMenu(username)
    setMenu(menuReceived)
}

const initializeBasket = (
    username: string,
    setBasket: (basket: ProductQuantity[]) => void
) => {
    const basketReceived = getLocalStorage<ProductQuantity[]>(username)
    if (basketReceived) setBasket(basketReceived)
}

export const initializeUserSession = async (
    username: string,
    setMenu: (menu: Products) => void,
    setBasket: (basket: ProductQuantity[]) => void
) => {
    await initializeMenu(username, setMenu)
    initializeBasket(username, setBasket)
}
