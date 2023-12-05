import { useContext } from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import Admin from "./Admin/Admin"
import Menu from "./Menu/Menu"
import { OrderContext } from "../../../../../context/OrderContext"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { adminAnimation } from "../../../../../theme/animations"

export default function MainRightSide() {
    const { isModeAdmin } = useContext(OrderContext)

    return (
        <MainRightSideStyled>
            <Menu />
            {isModeAdmin && (
                <TransitionGroup appear={true} component={null}>
                    <CSSTransition classNames={"admin"} timeout={500}>
                        <Admin />
                    </CSSTransition>
                </TransitionGroup>
            )}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    ${adminAnimation}

    @media(max-width: 768px) {
        border-bottom-right-radius: 0;
    }
`
