import styled, { css } from "styled-components/native"
import { theme } from "../../theme"
import { MouseEventHandler } from "react"
import { GestureResponderEvent, Image, Pressable, Text, View } from "react-native"

type CardProps = {
    id: number | string
    title: string | undefined
    imageSource: string
    leftDescription: string
    hasDeleteButton?: boolean
    isSelected: boolean
    isHoverable: boolean
    overlapImageSource: string
    isOverlapImageVisible?: boolean
    onDelete: MouseEventHandler
    onSelect: GestureResponderEvent
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
        <CardContainer>
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    <LeftDescription>{leftDescription}</LeftDescription>
                    <RightDescription>
                        {/* <Button
                                    type="button"
                                    label="Ajouter"
                                    className="add-to-basket-button"
                                    onClick={onAdd} disabled={isOverlapImageVisible}
                                /> */}
                        <Pressable onPress={onAdd} disabled={isOverlapImageVisible}>
                            <BasketButton>Ajouter</BasketButton>
                        </Pressable>
                    </RightDescription>
                </CardDescription>
            </CardInfo>
            <ImageContainer>
                <Image
                    style={{ position: "relative", width: 100, height: 100, alignSelf: "flex-end", objectFit: "contain" }} source={imageSource} alt={title}
                />
            </ImageContainer>
        </CardContainer>
    )
}

const CardContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px;
    border: 1px solid green;
    justify-content: space-between;
    width: auto;
`
const CardInfo = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const ImageContainer = styled.View`
    /* flex-direction: row; */
    justify-content: center;
    align-items: flex-end;
    align-self: flex-end;
    border: 1px solid red;
`

const CardTitle = styled.Text`
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
`
const CardDescription = styled.View`
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
`
const LeftDescription = styled.Text`
    /* font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold}; */
    text-overflow: ellipsis;
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.primary};
`
const RightDescription = styled.Text`
    font-size: ${theme.fonts.size.P1};
`
const BasketButton = styled.Text`
    font-weight: ${theme.fonts.weights.semiBold};
    font-size: ${theme.fonts.size.XS};
`


// const CardStyled = styled.View<{ $isSelected: boolean, $isHoverable: boolean }>`

//     ${({ $isHoverable }) => $isHoverable && hoverableStyle}
//     border-radius: ${theme.borderRadius.extraRound};
//     height: 330px;

//     .card {
//         box-sizing: border-box;
//         width: 240px;
//         height: 330px;
//         display: grid;
//         grid-template-rows: 65% 1fr;
//         border-radius: ${theme.borderRadius.extraRound};
//         padding: 20px 20px 10px;
//         background: ${theme.colors.white};
//         box-shadow: rgba(0, 0, 0, 0.2) -8px 8px 20px 0px;
//         gap: 0;
//         position: relative;

//         .card-delete {
//             z-index: 2;
//             border: 1px solid red;
//             position: absolute;
//             top: 15px;
//             right: 15px;
//             cursor: pointer;
//             width: 30px;
//             height: 30px;
//             color: ${theme.colors.primary};
//             padding: 0;
//             border: none;
//             background: none;

//             .icon {
//                 height: 100%;
//                 width: 100%;
//             }

//             &:hover {
//                 color: ${theme.colors.red};
//             }

//             &:active {
//                 color: ${theme.colors.primary};
//             }

//         }

//         .card-image {
//             width: 100%;
//             height: auto;
//             margin-top: 30px;
//             margin-bottom: 20px;

//             img {
//                 width: 100%;
//                 height: 100%;
//                 object-fit: contain;
//                 border-radius: ${theme.borderRadius.extraRound};
//             }

//             .overlap {
//                 .overlap-image {
//                     position: absolute;
//                     top: 0;
//                     bottom: 0%;
//                     width: 80%;
//                     height: 100%;
//                     z-index: 1;
//                     border-radius: ${theme.borderRadius.extraRound};
//                 }

//                 .transparent-layer {
//                     height: 100%;
//                     width: 100%;
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     opacity: 70%;
//                     background: snow;
//                     z-index: 1;
//                     border-radius: ${theme.borderRadius.extraRound};
//                 }
//             }
//         }

//         .card-text {
//             user-select: none;
//             display: grid;
//             grid-template-rows: 30% 70%;
//             padding: 0.3em;

//             .card-title {
//                 margin: auto 0px;
//                 font-size: ${theme.fonts.size.P4};
//                 position: relative;
//                 bottom: 10px;
//                 font-weight: ${theme.fonts.weights.bold};
//                 color: rgb(23, 22, 26);
//                 text-align: left;
//                 white-space: nowrap;
//                 overflow: hidden;
//                 width: 100%;
//                 text-overflow: ellipsis;
//                 font-family: "Amatic SC", cursive;
//             }

//             .card-description {
//                 position: relative;
//                 display: grid;
//                 grid-template-columns: 1fr 1fr;

//                 .left-description {
//                     display: flex;
//                     -webkit-box-pack: start;
//                     justify-content: flex-start;
//                     -webkit-box-align: center;
//                     align-items: center;
//                     white-space: nowrap;
//                     overflow: hidden;
// text-overflow: ellipsis;
// font-weight: ${theme.fonts.weights.medium};
// color: ${theme.colors.primary};
//                 }

//                 .right-description {
//                     display: flex;
//                     -webkit-box-pack: end;
//                     justify-content: flex-end;
//                     -webkit-box-align: center;
//                     align-items: center;
//                     font-size: ${theme.fonts.size.P1};

//                     .add-to-basket-button {
//                         z-index: 2;
//                         padding: 12px 2em;
//                         font-weight: ${theme.fonts.weights.semiBold};
//                         font-size: ${theme.fonts.size.XS};
//                     }
//                 }
//             }
//         }

//         ${({ $isHoverable, $isSelected }) => $isHoverable && $isSelected && selectedStyle}

//     }
// `

// const hoverableStyle = css`
//     &:hover {
//         cursor: pointer;
//         box-shadow: ${theme.shadows.orangeHighlight};
//     }
// `

// const selectedStyle = css`
//   background: ${theme.colors.primary};
//   .add-to-basket-button {
//     color: ${theme.colors.primary};
//     background-color: ${theme.colors.white};
//     border: 1px solid ${theme.colors.white};
//     transition: all 200ms ease-out;
//     &:hover {
//       color: ${theme.colors.white};
//       background-color: ${theme.colors.primary};
//       border: 1px solid ${theme.colors.white};
//       transition: all 200ms ease-out;
//     }
//     &:active {
//       background-color: ${theme.colors.white} !important;
//       color: ${theme.colors.primary} !important;
//     }
//   }

//   .card-delete {
//     color: ${theme.colors.white};

//     &:active {
//       color: ${theme.colors.white};
//     }
//   }

//   .card-text {
//     .card-description {
//       .left-description {
//         color: ${theme.colors.white};
//       }
//     }
//   }
// `