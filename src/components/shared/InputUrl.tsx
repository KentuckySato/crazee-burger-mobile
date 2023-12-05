import styled from 'styled-components';
import { theme } from '../../theme';

type Props = {
    name: string
    className?: string
    placeholder: string
    value: string | number
    required?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    extraProps?: React.InputHTMLAttributes<HTMLInputElement>
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    inputStyle?: object
    containerStyle?: object
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
}

export default function InputUrl({
    leftIcon, rightIcon, size = 'sm',
    className, placeholder, name, value, required = false, onChange,
    extraProps, inputStyle, containerStyle,
    disabled = false
}: Props) {

    if (size === 'lg') {
        inputStyle = {
            ...inputStyle,
            fontSize: theme.fonts.size.P3,
            height: 32,
        }
    } else if (size === 'md') {
        inputStyle = {
            ...inputStyle,
            fontSize: theme.fonts.size.P2,
            height: 24,
        }
    } else {
        inputStyle = {
            ...inputStyle,
            fontSize: theme.fonts.size.SM,
        }
    }

    return (
        <InputUrlStyled style={containerStyle}>
            {leftIcon && leftIcon}
            <input
                onChange={onChange}
                value={value}
                type='url'
                name={name}
                className={className}
                placeholder={placeholder}
                required={required}
                style={inputStyle}
                disabled={disabled}
                {...extraProps}
            />
            {rightIcon && rightIcon}
        </InputUrlStyled>
    )
}

const InputUrlStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 15px;
    margin: 18px 0px;
    white-space: nowrap;

    svg {
        margin-right: 12.8px;
        font-size: ${theme.fonts.size.P1};
        min-width: 1em;
        color: ${theme.colors.greyBlue};
    }

    input {
        display: flex;
        width: 100%;
        padding: 0.5rem 1rem;
        border-radius: ${theme.borderRadius.round};
        border: none;
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.size.SM};

        &:disabled {
            background-color: ${theme.colors.greyLight};
        }

    }

    ::placeholder {
        color: ${theme.colors.greyMedium};
    }
`;