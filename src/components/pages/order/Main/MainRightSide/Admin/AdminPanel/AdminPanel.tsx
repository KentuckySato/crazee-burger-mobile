import { styled } from "styled-components";
import { theme } from "../../../../../../../theme";
import { OrderContext } from "../../../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "../tabsConfig";


export default function AdminPanel() {

    const { currentTabSelected, productSelected } = useContext(OrderContext);

    const tabs = getTabsConfig(productSelected);

    const tabSelected = getTabSelected(tabs, currentTabSelected)

    return (
        <AdminPanelStyled className="panel-admin">
            <div>{tabSelected && tabSelected.Content}</div>
        </AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    height: 240px;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    box-sizing: border-box;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 0px 0px ${theme.borderRadius.extraRound} 0;
    padding: 30px 5%;
`;
