import styled, { RuleSet, css } from 'styled-components'
import { theme } from '../../theme'
import { ForwardedRef, forwardRef } from 'react'
import { ProductId } from '../../enums/product'

export type InputTextProps = {
    id?: ProductId
    name: string
    className?: string
    placeholder: string
    value: string | number
    required?: boolean
    inputStyle?: object
    containerStyle?: object
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    version?: string
    disabled?: boolean
    autoFocus?: boolean
    extraProps?: React.InputHTMLAttributes<HTMLInputElement>
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onFocus?: React.FocusEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
}

type Variant = {
    version: string
}

const InputText = forwardRef(({
    name, className, placeholder, value, required = false,
    onChange, onFocus, onBlur,
    inputStyle, containerStyle,
    leftIcon, rightIcon,
    disabled = false, version = 'normal', autoFocus, extraProps
}: InputTextProps, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
        <InputTextStyled style={containerStyle} className={className} version={version}>
            {leftIcon && <div className='icon'>{leftIcon}</div>}
            <input
                ref={ref}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                type="text"
                name={name}
                placeholder={placeholder}
                required={required}
                style={inputStyle}
                disabled={disabled}
                autoFocus={autoFocus}
                {...extraProps}
            />
            {rightIcon && <div className='icon'>{rightIcon}</div>}
        </InputTextStyled>
    )
})

const InputTextStyled = styled.div<Variant>`
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;

    .icon {
        display: flex;
        font-size: ${theme.fonts.size.SM};
        margin-right: 13px;
    }

    input {
        border: none;
        font-size: ${theme.fonts.size.SM};
        width: 100%;

        &:focus {
            outline: none;
        }

        &:disabled {
            background-color: ${theme.colors.greyLight};
        }

        &::placeholder {
            color: ${theme.colors.greyMedium};
        }

    }

    ${({ version }) => extraStyle[version]}

`

const extraStyleNormal = css`
    background-color: ${theme.colors.white};
    padding: 18px 28px;
    color: ${theme.colors.greySemiDark};

    input {
        color: ${theme.colors.dark};

        &:placeholder {
            background-color: ${theme.colors.white};
        }
    }
`

const extraStyleMinimalist = css`
    background-color: ${theme.colors.background_white};
    padding: 8px 24px;
    color: ${theme.colors.greyBlue};

    input {
        color: ${theme.colors.dark};
        background-color: ${theme.colors.background_white};

        &:placeholder {
            outline: 0;
        }
    }
`

const extraStyle: { [key: string]: RuleSet<object> } = {
    normal: extraStyleNormal,
    minimalist: extraStyleMinimalist
}

export default InputText