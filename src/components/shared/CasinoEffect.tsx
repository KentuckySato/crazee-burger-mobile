// import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components/native"
import { casinoEffect } from "../../theme/animations"
import { Text } from "react-native"

type CasinoEffectProps = {
    count: string
    quantityColor?: string
    className?: string
}

export default function CasinoEffect({ count, quantityColor = 'black', className }: CasinoEffectProps) {
    return (
        <CasinoEffectStyled>
            <Text style={{
                color: quantityColor,
            }}>{count}</Text>
        </CasinoEffectStyled>
    )
}

const CasinoEffectStyled = styled.View`
    position: relative;
    overflow-y: hidden;

    span {
        display: inline-block;
    }

    /* ${casinoEffect} */
`
