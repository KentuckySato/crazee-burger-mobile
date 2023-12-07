import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { Products } from "../enums/product"

export const syncBothMenu = async (userId: string, menuUpdated: Products) => {
    const docRef = doc(db, "users", userId)

    // Update only menu and keep others data safe.
    await updateDoc(docRef, {
        menu: menuUpdated,
    })
}

export const getMenu = async (userId: string) => {
    const docRef = doc(db, "users", userId)

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const { menu } = docSnapshot.data()
        return menu as Products
    }
}
