import styled from "styled-components/native"
import { casinoEffect } from "../../theme/animations"
import { Text } from "react-native"

type CasinoEffectProps = {
    count: string
    quantityColor?: string
}

export default function CasinoEffect({ count, quantityColor = 'black' }: CasinoEffectProps) {
    return (
        <CasinoEffectStyled>
            <Text style={{
                flex: 1,
                color: quantityColor,
            }}>{count}</Text>
        </CasinoEffectStyled>
    )
}

const CasinoEffectStyled = styled.View`
    position: relative;
    /* overflow-y: hidden; */

    span {
        display: inline-block;
    }

    /* ${casinoEffect} */
`
