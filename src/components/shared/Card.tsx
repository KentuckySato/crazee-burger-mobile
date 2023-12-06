import styled, { css } from "styled-components"
import Button from "./@Button"
import { theme } from "../../theme"
import { TiDelete } from "react-icons/ti"
import { MouseEventHandler } from "react"
import { fadeInFromRight, fadeInFromTop } from "../../theme/animations"

type CardProps = {
    id: number | string
    title: string | undefined
    imageSource: string
    leftDescription: string
    hasDeleteButton?: boolean
    isSelected: boolean
    isHoverable: boolean
    overlapImageSource?: string
    isOverlapImageVisible?: boolean
    onDelete: MouseEventHandler
    onSelect: MouseEventHandler
    onAdd: MouseEventHandler
}

export default function Card({
    title,
    imageSource,
    leftDescription,
    isHoverable,
    hasDeleteButton,
    isSelected = false,
    overlapImageSource,
    isOverlapImageVisible,
    onDelete,
    onSelect,
    onAdd,
}: CardProps) {

    return (
        <CardStyled
            $isSelected={isSelected}
            $isHoverable={isHoverable}
            onClick={onSelect}
        >
            <div className="card">
                {
                    hasDeleteButton &&
                    <button className="card-delete" aria-label="delete-button" onClick={onDelete}>
                        <TiDelete className="icon" />
                    </button>
                }

                <div className="card-image">
                    {isOverlapImageVisible && (
                        <div className="overlap">
                            <div className="transparent-layer"></div>
                            <img src={overlapImageSource} alt="overlap" className="overlap-image" />
                        </div>
                    )}
                    <img src={imageSource} alt={title} />
                </div>

                <div className="card-text">
                    <span className="card-title">{title}</span>
                    <div className="card-description">
                        <span className="left-description">{leftDescription}</span>
                        <span className="right-description">
                            <Button
                                type="button"
                                label="Ajouter"
                                className="add-to-basket-button"
                                onClick={onAdd} disabled={isOverlapImageVisible}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </CardStyled>

    )
}

const CardStyled = styled.div<{ $isSelected: boolean, $isHoverable: boolean }>`

    ${({ $isHoverable }) => $isHoverable && hoverableStyle}
    border-radius: ${theme.borderRadius.extraRound};
    height: 330px;

    .card {
        box-sizing: border-box;
        width: 240px;
        height: 330px;
        display: grid;
        grid-template-rows: 65% 1fr;
        border-radius: ${theme.borderRadius.extraRound};
        padding: 20px 20px 10px;
        background: ${theme.colors.white};
        box-shadow: rgba(0, 0, 0, 0.2) -8px 8px 20px 0px;
        gap: 0;
        position: relative;

        .card-delete {
            z-index: 2;
            border: 1px solid red;
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            width: 30px;
            height: 30px;
            color: ${theme.colors.primary};
            padding: 0;
            border: none;
            background: none;
            animation: ${fadeInFromRight} ${theme.animations.speed.slow} ease-out;

            .icon {
                height: 100%;
                width: 100%;
            }

            &:hover {
                color: ${theme.colors.red};
            }

            &:active {
                color: ${theme.colors.primary};
            }

        }

        .card-image {
            width: 100%;
            height: auto;
            margin-top: 30px;
            margin-bottom: 20px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: ${theme.borderRadius.extraRound};
            }

            .overlap {
                .overlap-image {
                    position: absolute;
                    top: 0;
                    bottom: 0%;
                    width: 80%;
                    height: 100%;
                    z-index: 1;
                    animation: ${fadeInFromTop} ${theme.animations.speed.slow};
                    border-radius: ${theme.borderRadius.extraRound};
                }

                .transparent-layer {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 70%;
                    background: snow;
                    z-index: 1;
                    border-radius: ${theme.borderRadius.extraRound};
                }
            }
        }

        .card-text {
            user-select: none;
            display: grid;
            grid-template-rows: 30% 70%;
            padding: 0.3em;

            .card-title {
                margin: auto 0px;
                font-size: ${theme.fonts.size.P4};
                position: relative;
                bottom: 10px;
                font-weight: ${theme.fonts.weights.bold};
                color: rgb(23, 22, 26);
                text-align: left;
                white-space: nowrap;
                overflow: hidden;
                width: 100%;
                text-overflow: ellipsis;
                font-family: "Amatic SC", cursive;
            }

            .card-description {
                position: relative;
                display: grid;
                grid-template-columns: 1fr 1fr;

                .left-description {
                    display: flex;
                    -webkit-box-pack: start;
                    justify-content: flex-start;
                    -webkit-box-align: center;
                    align-items: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: ${theme.fonts.weights.medium};
                    color: ${theme.colors.primary};
                }

                .right-description {
                    display: flex;
                    -webkit-box-pack: end;
                    justify-content: flex-end;
                    -webkit-box-align: center;
                    align-items: center;
                    font-size: ${theme.fonts.size.P1};

                    .add-to-basket-button {
                        z-index: 2;
                        padding: 12px 2em;
                        font-weight: ${theme.fonts.weights.semiBold};
                        font-size: ${theme.fonts.size.XS};
                    }
                }
            }
        }

        ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}

    }

    @media (max-width: 768px) {
        height: 120px;

        .card {
            width: 100%;
            height: 120px;
            gap: 0;
            position: relative;


            display: grid;
            grid-template-columns: 70% 1fr;
            grid-template-rows: auto;

            justify-content: center;
            align-items: center;
            align-content: center;

            .card-delete {
                top: 10px;
                right: 10px;
            }

            .card-image {
                height: 80px;
                width: 80px;
                margin-top: 0px;
                margin-bottom: 0px;
                grid-area: 1 / 2 / 2 / 3;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: ${theme.borderRadius.extraRound};
                }

            }

            .card-text {
                grid-area: 1 / 1 / 2 / 2;

                .card-title {
                    font-size: ${theme.fonts.size.P3};
                }

                .card-description {
                    grid-template-columns: 1fr;
                    .left-description {
                        font-size: ${theme.fonts.size.SM};
                    }

                    .right-description {
                        justify-content: flex-start;
                        .add-to-basket-button {
                            padding: 8px 5px;
                            font-size: ${theme.fonts.size.XS};
                            width: 40%;
                        }
                    }
                }
            }
        }

    }

`

const hoverableStyle = css`
    &:hover {
        cursor: pointer;
        box-shadow: ${theme.shadows.orangeHighlight};
    }
`

const selectedStyle = css`
  background: ${theme.colors.primary};
  .add-to-basket-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    &:active {
      background-color: ${theme.colors.white} !important;
      color: ${theme.colors.primary} !important;
    }
  }

  .card-delete {
    color: ${theme.colors.white};

    &:active {
      color: ${theme.colors.white};
    }
  }

  .card-text {
    .card-description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`