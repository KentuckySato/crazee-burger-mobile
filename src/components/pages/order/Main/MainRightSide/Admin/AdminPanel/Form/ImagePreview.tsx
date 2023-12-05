import styled from "styled-components"
import { theme } from "../../../../../../../../theme"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fadeInAnimation } from "../../../../../../../../theme/animations";

type ImagePreviewProps = { imageSource: string, title: string };

export default function ImagePreview({ imageSource, title }: ImagePreviewProps) {
    return (
        <ImagePreviewStyled>
            {imageSource ? (
                <TransitionGroup appear={true} component={null} className={"transition-group"}>
                    <CSSTransition timeout={500} classNames={"image-preview-animation"}>
                        <img src={imageSource} alt={title} />
                    </CSSTransition>
                </TransitionGroup>
            ) : (
                <div className="empty-image">Aucune Image</div>
            )}
        </ImagePreviewStyled>
    )
}

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center;
    animation: ${fadeInAnimation} ${theme.animations.speed.slow} ease-out;
  }

  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
    text-align: center;
  }
`
