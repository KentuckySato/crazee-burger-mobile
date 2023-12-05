import styled from "styled-components"
import { Product } from "../../../../../../../../enums/product"
import InputText, { InputTextProps } from "../../../../../../../shared/InputText"
import SelectInput, { SelectProps } from "../../../../../../../shared/SelectInput"
import { getInputTextsConfig } from "./inputTextConfig"
import { getSelectsConfig } from "./selectConfig"

type InputsProps = {
    product: Product
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLSelectElement>
    inputRef?: React.MutableRefObject<HTMLInputElement | null>
}

export default function Inputs({ product, onChange, onFocus, onBlur, inputRef }: InputsProps) {
    const inputTexts = getInputTextsConfig(product)
    const inputSelects = getSelectsConfig(product)

    return (
        <InputsStyled>
            {inputTexts.map((inputText: InputTextProps) => (
                <InputText
                    key={inputText.id}
                    ref={inputRef && inputText.name === "title" ? inputRef : null}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    version={inputText.version}
                    {...inputText}
                />
            ))}

            {inputSelects.map((select: SelectProps) => (
                <SelectInput
                    key={select.id}
                    onChange={onChange}
                    {...select}
                />
            ))}
        </InputsStyled>
    )
}

const InputsStyled = styled.div`
    display: grid;
    grid-area: 1 / 2 / -2 / 3;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;

    .title {
        grid-area: 1/1/2/4;
    }
    .image-source {
        grid-area: 2/1/3/4;
    }
    .price {
        grid-area: 3/1/4/2;
    }
    .is-available {
        grid-area: 3/2/4/3;
    }
    .is-publicised {
        grid-area: 3/3/4/4;
    }
`;
