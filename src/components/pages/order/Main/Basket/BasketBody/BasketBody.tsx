import { useContext } from "react";
import { isEmpty } from "../../../../../../utils/array";
import BasketProducts from "./BasketProducts";
import { OrderContext } from "../../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";

export default function BasketBody() {
    const { basket, menu } = useContext(OrderContext)

    return (
        <>{isEmpty(basket) ? <EmptyBasket isLoading={menu === undefined} /> : <BasketProducts />}</>
    )

}
