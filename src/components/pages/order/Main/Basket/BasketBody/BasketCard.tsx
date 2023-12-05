import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import { MdDeleteForever } from "react-icons/md";
import { MouseEventHandler } from "react";
import CasinoEffect from "../../../../../shared/CasinoEffect";

type BasketCardProps = {
    title: string
    imageSource: string
    price: string
    quantity: number
    className?: string
    isSelected: boolean
    isClickable: boolean
    onSelect: MouseEventHandler
    onDelete: MouseEventHandler
}

export default function BasketCard({
    title,
    imageSource,
    price,
    quantity,
    className,
    isSelected = false,
    isClickable,
    onSelect,
    onDelete
}: BasketCardProps) {
    return (
        <BasketCardStyled
            className={className}
            $isSelected={isSelected}
            $isClickable={isClickable}
            onClick={onSelect}
        >
            <div className="delete-button" onClick={onDelete}>
                <MdDeleteForever className="icon" />
            </div>
            <div className="image">
                <img src={imageSource} alt={title} />
            </div>
            <div className="text-info">
                <div className="left-info">
                    <div className="title">
                        <span>{title}</span>
                    </div>
                    <span className="price">{price}</span>
                </div>
                <div className="quantity">
                    <CasinoEffect count={`x ${quantity}`} />
                </div>
            </div>
        </BasketCardStyled>
    )
}

const BasketCardStyled = styled.div<{ $isSelected: boolean, $isClickable: boolean }>`
    box-sizing: border-box;
    height: 86px;
    padding: 8px 16px;
    display: grid;
    grid-template-columns: 30% 1fr;

    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.cardBasket};

    position: relative;

    cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};

    .delete-button {
        display: none;
        z-index: 1;
    }

    .image {
        box-sizing: border-box;
        height: 70px;

        img {
            padding: 5px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .text-info {
        user-select: none;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 70% 1fr;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.primary};

        .left-info {
            display: grid;
            grid-template-rows: 60% 40%;
            margin-left: 21px;

            .title {
                display: flex;
                align-items: center;

                font-family: ${theme.fonts.family.stylish};
                font-size: ${theme.fonts.size.P3};
                line-height: 32px;
                font-weight: ${theme.fonts.weights.bold};
                color: ${theme.colors.dark};
                min-width: 0;

                span {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .price {
                font-size: ${theme.fonts.size.SM};
                font-weight: ${theme.fonts.weights.medium};
            }
        }

        .quantity {
            display: flex;
            margin-right: 20px;
            box-sizing: border-box;
            align-items: center;
            justify-content: flex-end;
            font-size: ${theme.fonts.size.SM};
            font-weight: ${theme.fonts.weights.medium};
        }
    }

    &:hover {
        .delete-button {
            border: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 76px;
            border-top-right-radius: ${theme.borderRadius.round};
            border-bottom-right-radius: ${theme.borderRadius.round};
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${theme.colors.red};
            color: ${theme.colors.white};
            cursor: pointer;

            .icon {
                width: ${theme.fonts.size.P3};
                height: ${theme.fonts.size.P3};
            }

            &:hover {
                .icon {
                    color: ${theme.colors.dark};
                }

                &:active {
                    .icon {
                        color: ${theme.colors.white};
                    }
                }

            }
        }
    }

    ${({ $isSelected }) => $isSelected && selectedStyle}

`

const selectedStyle = css`
  background: ${theme.colors.primary};
  .price, .quantity {
    color: ${theme.colors.white};
  }
`