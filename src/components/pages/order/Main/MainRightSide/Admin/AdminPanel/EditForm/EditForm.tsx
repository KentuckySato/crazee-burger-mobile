import { useContext, useState } from "react";
import { OrderContext } from "../../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import AdminForm from "../Form/AdminForm";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage";

export default function EditForm() {

    const { username, productSelected, setProductSelected, handleEditMenuProduct, titleFieldRef } = useContext(OrderContext)

    const [valueOnFocus, setValueOnFocus] = useState<string>()
    const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, tagName } = event.target;

        // @TODO: think a better way to do this
        // Use case: when user type a price with a french comma, the amount to pay is not handle correctly.
        // Replace french comma with dot in real time.
        let newPrice;
        if (name === "price") {
            newPrice = value.replace(",", ".")
        }

        const productBeingUpdated = {
            ...productSelected,
            [name]: name === "price" ? newPrice : value,
        }

        setProductSelected(productBeingUpdated) // update EditForm
        handleEditMenuProduct(productBeingUpdated, username) // update menu

        if (tagName === "SELECT") displaySuccessMessage()
    }

    const handleOnFocus = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        const inputValueOnFocus = event.target.value
        setValueOnFocus(inputValueOnFocus)
    }
    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        const inputValueOnBlur = event.target.value
        if (valueOnFocus != inputValueOnBlur) {
            displaySuccessMessage()
        }
    }

    return (
        <AdminForm
            product={productSelected}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            inputRef={titleFieldRef}
        >
            {isSaved ? <SavingMessage /> : <EditInfoMessage />}
        </AdminForm>
    )
}