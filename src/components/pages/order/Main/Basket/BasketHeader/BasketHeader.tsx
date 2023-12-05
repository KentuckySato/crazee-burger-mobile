import { PropsWithChildren } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

type HeaderProps = {
    className?: string
}

export default function BasketHeader({ className, children }: PropsWithChildren<HeaderProps>) {
    return <BasketHeaderStyled className={className}>{children}</BasketHeaderStyled>
}

const BasketHeaderStyled = styled.div`
    height: 70px;
    background: ${theme.colors.background_dark};
    padding: 0 16px;
`;
