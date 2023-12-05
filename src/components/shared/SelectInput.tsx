import styled from 'styled-components';
import { theme } from '../../theme';

export type SelectProps = {
    id?: string
    name: string
    className?: string
    value: boolean
    required?: boolean
    options: Options[]
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    extraProps?: React.InputHTMLAttributes<HTMLSelectElement>
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
    onFocus?: React.FocusEventHandler<HTMLSelectElement>
    onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

export type Options = {
    id: string
    value: boolean
    label: string
}

export default function SelectInput({
    id, name, className, value, options,
    onChange, onFocus, onBlur,
    leftIcon, rightIcon,
    ...extraProps
}: SelectProps) {
    return (
        <SelectStyled className={className}>
            {leftIcon && <div className='icon'>{leftIcon}</div>}
            <select
                id={id}
                value={String(value)}
                name={name}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...extraProps}
            >
                {options.map(({ id, value, label }) => {
                    return <option key={id} value={String(value)}>{label}</option>
                })}
            </select>
            {rightIcon && <div className='icon'>{rightIcon}</div>}
        </SelectStyled>
    )
}

const SelectStyled = styled.div`
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 8px 16px;


    .icon {
        font-size: ${theme.fonts.size.SM};
        margin-right: 13px;
        color: ${theme.colors.greyBlue};
        display: flex;
    }

    select {
        background-color: ${theme.colors.background_white};
        border: none;
        font-weight: ${theme.fonts.weights.regular};
        font-size: 14px;
        color: ${theme.colors.dark};
        width: 100%;

        &.focus {
            outline: none;
        }
    }
`