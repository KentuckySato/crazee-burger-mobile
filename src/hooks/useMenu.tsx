import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone, findIndexById, removeObjectById } from "../utils/array"
import { Product, ProductId, Products } from "../enums/product"
import { syncBothMenu } from "../api/product"

export const useMenu = () => {
    const [menu, setMenu] = useState<Products>(fakeMenu.LARGE)

    // Comportements (gestionnaire de state ou "state handlers")
    const handleAddMenuProduct = (newProduct: Product, username: string) => {
        const menuCopy = deepClone(menu)
        let menuUpdated: Products

        if (menuCopy)
            menuUpdated = [newProduct, ...menuCopy]

        setMenu(menuUpdated)
        syncBothMenu(username, menuUpdated)
    }

    const handleDeleteMenuProduct = (idOfProductToDelete: ProductId, username: string) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu)

        // filter the item to delete
        const menuUpdated = removeObjectById(idOfProductToDelete, menuCopy)

        setMenu(menuUpdated)
        syncBothMenu(username, menuUpdated)
    }

    const handleEditMenuProduct = (productBeingEdited: Product, username: string) => {
        // We need to copy the menu to avoid mutation
        const menuCopy = deepClone(menu)
        if (menuCopy) {
            const indexOfProductBeingEdited = findIndexById(productBeingEdited.id, menuCopy)
            if (indexOfProductBeingEdited != undefined && indexOfProductBeingEdited >= 0) {
                menuCopy[indexOfProductBeingEdited] = productBeingEdited
                setMenu(menuCopy)
                syncBothMenu(username, menuCopy)
            }
        }

    }

    const resetMenu = (username: string) => {
        setMenu(fakeMenu.LARGE)
        syncBothMenu(username, fakeMenu.LARGE)
    }

    return { menu, setMenu, handleAddMenuProduct, handleDeleteMenuProduct, handleEditMenuProduct, resetMenu }
}