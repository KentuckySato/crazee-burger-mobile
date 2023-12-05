import { GoMegaphone } from "react-icons/go";
import { Product } from "../../../../../../../../enums/product";
import { FiPackage } from "react-icons/fi";
import { SelectProps } from "../../../../../../../shared/SelectInput";
import { isAvailableOptions, isPublicisedOptions } from "../../../../../../../../enums/select";

export const getSelectsConfig = (newProduct: Product): SelectProps[] => [
    {
        id: "4",
        leftIcon: <FiPackage />,
        name: "isAvailable",
        options: isAvailableOptions,
        value: newProduct.isAvailable,
        className: "is-available",
    },
    {
        id: "5",
        leftIcon: <GoMegaphone />,
        name: "isPublicised",
        options: isPublicisedOptions,
        value: newProduct.isPublicised,
        className: "is-publicised",
    },
];
