import styled from "styled-components"
import Total from "./BasketHeader/Total"
import BasketFooter from "./BasketFooter"
import BasketBody from "./BasketBody/BasketBody"
import { FaShoppingBasket } from "react-icons/fa"
import { useState } from "react"
import { theme } from "~/src/theme"

export default function Basket() {

    const [isOpen, setIsOpen] = useState(false)

    const handleShowBasketMobile = () => setIsOpen(!isOpen)

    return (
        <BasketStyled className="basket">
            <div className={`basket-elements ${isOpen ? "active" : ""}`}>
                <Total />
                <BasketBody />
                <BasketFooter />
            </div>
            <FaShoppingBasket className="basket-icon" onClick={handleShowBasketMobile} />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    height: 85vh;

    .header-footer {
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
    }

    @media(max-width: 768px) {
        height: calc(100dvh - 10dvh);
        width: 80dvw;
        border-radius: 0;
        display: flex;
        position: absolute;

        .basket-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 100%;
            transform: translate(-50%,-50%);

            z-index: 3;
            height: 30px;
            width: 30px;
            color: ${theme.colors.greyBlue};
            background: ${theme.colors.white};
            padding: 5px;
            border-radius: 50%;

            transition: all 0.3s ease-out;

            &:hover:not(:disabled) {
                color: ${theme.colors.primary};
                transition: all 0.2s ease-out 0s;
                cursor: pointer;

                &:active {
                    color: ${theme.colors.greyBlue};
                    transition: all 0.2s ease-out 0s;
                }
            }
        }

        .basket-elements {
            /* position: absolute; */
            width: 0;
            height: 0;
            background-color: ${theme.colors.white};
            transition: all 0.3s ease-out;
            overflow: hidden;
            z-index: 3;
            border-bottom-left-radius: ${theme.borderRadius.extraRound};
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
        }

        .basket-elements.active {
            width: 80dvw;
            height: 100dvh;
        }

        .header-footer {
            padding: 10px 20px;
            border-bottom-left-radius: 0;
        }
    }
`
