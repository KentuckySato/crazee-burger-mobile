import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import { ProductId, ProductQuantity } from "../enums/product"
import { deepClone, removeObjectById, findIndexById, findObjectById } from "../utils/array"
import { setLocalStorage } from "../utils/window"

export const useBasket = () => {
    const [basket, setBasket] = useState<ProductQuantity[]>(fakeBasket.EMPTY)

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddBasketProduct = (idProductToAdd: ProductId, username: string) => {
        const basketCopy = deepClone(basket)
        const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

        if (productAlreadyInBasket) {
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
            return
        }

        createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username)
    }

    const incrementProductAlreadyInBasket = (idProductToAdd: ProductId, basketCopy: ProductQuantity[], username: string) => {
        const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
        if (indexOfBasketProductToIncrement != undefined && indexOfBasketProductToIncrement >= 0) {
            basketCopy[indexOfBasketProductToIncrement].quantity += 1
            setBasket(basketCopy)
            // setLocalStorage(username, basketCopy)
        }
    }

    const createNewBasketProduct = (idProductToAdd: ProductId, basketCopy: ProductQuantity[], setBasket: (basket: ProductQuantity[]) => void, username: string) => {
        // We do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
        const newBasketProduct = { id: idProductToAdd, quantity: 1 }
        const newBasket = [newBasketProduct, ...basketCopy]
        setBasket(newBasket)
        // setLocalStorage(username, newBasket)
    }


    const handleDeleteBasketProduct = (idOfProductToDelete: ProductId, username: string) => {
        const basketUpdated = removeObjectById(idOfProductToDelete, basket)
        if (basketUpdated) {
            setBasket(basketUpdated)
            // setLocalStorage(username, basketUpdated)
        }
    }


    return { basket, setBasket, handleAddBasketProduct, handleDeleteBasketProduct }
};

