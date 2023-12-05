import { styled } from "styled-components";
import Logo from "../../../shared/Logo";
import { refreshPage } from "../../../../utils/window";

export default function NavbarLeftSide() {
    return (
        <NavbarLeftSideStyled>
            <Logo className="logo-order-page" onClick={refreshPage}/>
        </NavbarLeftSideStyled>
    )
}

const NavbarLeftSideStyled = styled.div`
    display: flex;
    align-items: center;

    .logo-order-page {
        cursor: pointer;
    }
`;
