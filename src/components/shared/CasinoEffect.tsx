import styled from "styled-components/native"
import { casinoEffect } from "../../theme/animations"
import { Text } from "react-native"
import { theme } from "../../theme"

type CasinoEffectProps = {
    count: string
    quantityColor?: string
}

export default function CasinoEffect({ count, quantityColor = 'black' }: CasinoEffectProps) {
    return (
        <CasinoEffectStyled>
            <Text style={{
                color: quantityColor,
                fontWeight: theme.fonts.weights.bold,
                fontSize: 32,
                fontFamily: theme.fonts.family.stylish,
                letterSpacing: 2
            }}>{count}</Text>
        </CasinoEffectStyled>
    )
}

const CasinoEffectStyled = styled.View`
    /* ${casinoEffect} */
`
