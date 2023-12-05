import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import { PropsWithChildren, ReactNode } from "react";
import { Product } from "../../../../../../../../enums/product";
import Inputs from "./Inputs";

type AdminFormProps = {
    product: Product
    inputRef?: React.MutableRefObject<HTMLInputElement | null>
    children: ReactNode
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>
    onSubmit?: React.FormEventHandler
}

export default function AdminForm({ product, inputRef, onChange, onFocus, onBlur, onSubmit, children }: PropsWithChildren<AdminFormProps>) {
    return (
        <AdminFormStyled onSubmit={onSubmit}>
            <ImagePreview imageSource={product.imageSource} title={product.title} />
            <Inputs
                product={product}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                inputRef={inputRef}
            />
            <div className="footer">{children}</div>
        </AdminFormStyled>
    )
}

const AdminFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 8px 20px;
    width: 70%;
    height: 100%;
    margin: auto 0px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-self: flex-start;

    .footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
    }
`;
