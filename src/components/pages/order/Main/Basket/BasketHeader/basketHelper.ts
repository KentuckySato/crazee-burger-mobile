import { ProductQuantity, Products } from "../../../../../../enums/product"
import { findObjectById } from "../../../../../../utils/array"
import { convertStringToBoolean } from "../../../../../../utils/string"

export function calculcateSumToPay(basket: ProductQuantity[], menu: Products) {
    return basket.reduce((total, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)
        if (
            !menuProduct ||
            isNaN(menuProduct.price) ||
            !convertStringToBoolean(menuProduct.isAvailable)
        )
            return total
        return total + menuProduct.price * basketProduct.quantity
    }, 0)
}
