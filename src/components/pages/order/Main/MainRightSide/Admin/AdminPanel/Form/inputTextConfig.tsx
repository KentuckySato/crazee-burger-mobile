import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { Product } from "../../../../../../../../enums/product";
import { InputTextProps } from "../../../../../../../shared/InputText";

export const getInputTextsConfig = (newProduct: Product): InputTextProps[] => [
    {
        id: 1,
        leftIcon: <FaHamburger />,
        name: "title",
        placeholder: "Nom du produit (ex: Super Burger)",
        value: newProduct.title,
        version: "minimalist",
        className: "title",
    },
    {
        id: 2,
        leftIcon: <BsFillCameraFill />,
        name: "imageSource",
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png/)",
        value: newProduct.imageSource,
        version: "minimalist",
        className: "image-source",
    },
    {
        id: 3,
        leftIcon: <MdOutlineEuro />,
        name: "price",
        placeholder: "Prix",
        value: newProduct.price ? newProduct.price : "",
        version: "minimalist",
        className: "price",
    },
];
