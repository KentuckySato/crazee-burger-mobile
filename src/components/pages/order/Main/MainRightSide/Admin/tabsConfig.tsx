import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm/AddForm";
import EditForm from "./AdminPanel/EditForm/EditForm";
import HintMessage from "./AdminPanel/EditForm/HintMessage";
import { EMPTY_PRODUCT, Product } from "../../../../../../enums/product";

interface TabConfig {
    index: string;
    label: string;
    Icon: JSX.Element;
    Content?: JSX.Element;
}

export const getTabsConfig = (productSelected: Product): TabConfig[] => [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus />,
        Content: <AddForm />,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        Content: productSelected === EMPTY_PRODUCT ? <HintMessage /> : <EditForm />,
    },
];

export const getTabSelected = (tabs: TabConfig[], currentTabSelected: string) => {
    return tabs.find((tab) => tab.index === currentTabSelected);
};
