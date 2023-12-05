import { styled } from "styled-components";
import { theme } from "../../theme";

export type TabProps = {
    id?: string;
    className?: string;
    label?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    Icon: JSX.Element;

}

export default function Tab({ label, Icon, onClick, className }: TabProps) {
    return (
        <TabStyled className={className} onClick={onClick}>
            {Icon && <div className="icon">{Icon}</div>}
            {label && <span className="label">{label}</span>}
        </TabStyled>
    )
}

const TabStyled = styled.button`
    height: 43px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};

    position: relative;
    top: 1px;

    /* border */
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;

    box-shadow: ${theme.shadows.subtle};

    /* font */
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.greySemiDark};
    line-height: normal;
    text-align: center;

    .icon {
        display: flex;
    }

    .label {
        margin-left: 13px;
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        border-bottom: 2px solid ${theme.colors.white};
    }

    &.active {
        color: ${theme.colors.white};
        background-color: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
    }
`;
