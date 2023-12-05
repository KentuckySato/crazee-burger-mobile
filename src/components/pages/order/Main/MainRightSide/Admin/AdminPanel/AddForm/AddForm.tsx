import { useContext } from "react";
import { OrderContext } from "../../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../../enums/product";
import AdminForm from "../Form/AdminForm";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../../utils/maths";

export default function AddForm() {

    const { username, handleAddMenuProduct, newProduct, setNewProduct } = useContext(OrderContext)
    // Custom Hooks via keyword `use`
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(),
            price: replaceFrenchCommaWithDot(newProduct.price)
        };

        handleAddMenuProduct(newProductToAdd, username);
        setNewProduct(EMPTY_PRODUCT);

        displaySuccessMessage();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Set the new value in the newProduct object
        // Dynamically set the property name in the object
        // Dynamic property names in JavaScript
        setNewProduct({ ...newProduct, [name]: value });
    }

    return (
        <AdminForm
            product={newProduct}
            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            <SubmitButton isSubmitted={isSubmitted} />
        </AdminForm>
    )
}