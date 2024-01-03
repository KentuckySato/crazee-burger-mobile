import { useContext } from "react"
import { isEmpty } from "../../../../../../utils/array"
import BasketProducts from "./BasketProducts"
import { OrderContext } from "../../../../../../context/OrderContext"
import EmptyBasket from "./EmptyBasket"
import Total from "../BasketHeader/Total"
import styled from "styled-components/native"

export default function BasketBody() {
    const { basket, menu } = useContext(OrderContext)

    return (
        <BasketBodyStyled>
            {
                isEmpty(basket)
                    ? <EmptyBasket isLoading={menu === undefined} />
                    : <>
                        <BasketProducts />
                        <Total />
                    </>
            }
        </BasketBodyStyled>
    )

}

const BasketBodyStyled = styled.View`
    flex-direction: column;
    height: 100%;
`
