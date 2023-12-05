import styled from "styled-components";
import { BASKET_MESSAGE, IMAGE_BY_DEFAULT, ProductId } from "../../../../../../enums/product";
import BasketCard from "./BasketCard";
import { findObjectById } from "../../../../../../utils/array";
import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketProductsAnimation } from "../../../../../../theme/animations";
import { formatPrice } from "../../../../../../utils/maths";
import { convertStringToBoolean } from "../../../../../../utils/string";
import { theme } from "../../../../../../theme";
import Sticker from "../../../../../shared/Sticker";

export default function BasketProducts() {

    const {
        username,
        menu,
        basket,
        isModeAdmin,
        productSelected,
        handleProductSelected,
        handleDeleteBasketProduct
    } = useContext(OrderContext)

    const handleOnDelete = (event: React.MouseEvent<Element, MouseEvent>, idOfProduct: ProductId) => {
        event.stopPropagation()
        handleDeleteBasketProduct(idOfProduct, username)
    }

    // comportement (gestionnaire d'évènement ou "event handlers")
    const handleOnSelectBasketProduct = (idOfProductSelected: ProductId) => {
        if (isModeAdmin === false) return;
        handleProductSelected(idOfProductSelected)
    };

    return (
        <BasketProductsStyled>
            <TransitionGroup appear={true} component={null} className="transition-group">
                {basket.map(({ id, quantity }) => {
                    // Find the product in the menu to get the informations (title, price, imageSource)
                    const menuProduct = findObjectById(id, menu)
                    if (!menuProduct) return

                    const displayedPrice = convertStringToBoolean(menuProduct.isAvailable)
                        ? formatPrice(menuProduct.price)
                        : BASKET_MESSAGE.NOT_AVAILABLE

                    return (
                        <CSSTransition key={id} classNames={"basket-animation"} timeout={300}>
                            <div className="card-container">
                                {convertStringToBoolean(menuProduct.isPublicised) && <Sticker className="badge-new" />}
                                <BasketCard
                                    title={menuProduct.title}
                                    quantity={quantity}
                                    imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_BY_DEFAULT}
                                    isSelected={productSelected.id === id && isModeAdmin}
                                    isClickable={isModeAdmin}
                                    onSelect={() => handleOnSelectBasketProduct(id)}
                                    onDelete={(event) => handleOnDelete(event, id)}
                                    className="card"
                                    price={displayedPrice}
                                />
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </BasketProductsStyled>
    )
}

const BasketProductsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .card-container {
        position: relative;
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;

        &:first-child {
            margin-top: ${theme.spacing.md};
        }

        &:last-child {
            margin-bottom: ${theme.spacing.md};
        }

        .badge-new {
            position: absolute;
            z-index: 1;
            bottom: 10%;
            left: 21%;
        }
    }

    ${basketProductsAnimation}
`;
