// import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { casinoEffect } from "../../theme/animations"

type CasinoEffectProps = {
    count: string
    className?: string
}

export default function CasinoEffect({ count, className }: CasinoEffectProps) {
    return (
        <CasinoEffectStyled>
            {/* <TransitionGroup appear={true} component={null} className={"transition-group"}> */}
            {/* <CSSTransition key={count} classNames={"count-animated"} timeout={300}> */}
            <span className={className}>
                {count}
            </span>
            {/* </CSSTransition> */}
            {/* </TransitionGroup> */}
        </CasinoEffectStyled>
    )
}

const CasinoEffectStyled = styled.div`
    position: relative;
    overflow-y: hidden;

    span {
        display: inline-block;
    }

    ${casinoEffect}
`
