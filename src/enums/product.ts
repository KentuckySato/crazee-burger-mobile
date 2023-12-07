export type ProductId = number | string

export interface ProductQuantity {
    id: ProductId
    quantity: number
}

export type Product = {
    id: ProductId
    imageSource: string
    title: string
    price: number
    quantity: number
    isAvailable: boolean
    isPublicised: boolean
}

export type Products = Product[] | undefined

// @TODO: convert to enum
// /!\ Problem with enum and state `newProduct`.
// In AddForm, When user add new product, the attribute "0" si set with the value of the last property(quantity)
// Like this {"0": "quantity", "id": "", "title": "", "imageSource": "", "price": 0, "quantity": 0}
export const EMPTY_PRODUCT: Product = Object.freeze({
    id: "",
    title: "",
    imageSource: "",
    price: 0,
    quantity: 0,
    isAvailable: true,
    isPublicised: false,
})

export const IMAGE_BY_DEFAULT = "/images/coming-soon.png"
export const IMAGE_OUT_OF_STOCK = "/images/out-of-stock.png"

export const BASKET_MESSAGE = {
    EMPTY: "Votre commande est vide.",
    LOADING: "Chargement en cours...",
    NOT_AVAILABLE: "Non disponible",
}

export const AVAILABLE_OPTIONS = {
    IN_STOCK: "En stock",
    OUT_OF_STOCK: "En rupture",
}
export const PUBLICISED_OPTIONS = {
    WITH_PUB: "Avec pub",
    NO_PUB: "Sans pub",
}
