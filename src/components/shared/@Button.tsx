import styled, { css } from 'styled-components/native'
import { theme } from '../../theme'

type Props = {
    label: string
    type: "button" | "submit" | "reset" | undefined
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    btnStyle?: object
    leftIcon?: JSX.Element
    rightIcon?: JSX.Element
    version?: string
}

type Custom = {
    version: string
}

export default function Button({
    label, type,
    leftIcon, rightIcon,
    className, onClick,
    btnStyle,
    disabled = false,
    version = 'primary',
}: Props) {
    return (
        <View
            className={className}
            type={type}
            onClick={onClick}
            style={btnStyle}
            disabled={disabled}
            version={version}
        >
            {leftIcon &&
                <div className='icon'>{leftIcon}</div>
            }
            <span>{label}</span>
            {rightIcon &&
                <div className='icon'>{rightIcon}</div>
            }
        </View>
    )
}

const extraStylePrimary = css`
    width: 100%;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.heavy};
    cursor: pointer;


    &:hover:not(:disabled) {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        transition: all 0.2s ease-out 0s;
    }

    &:disabled {
        opacity: 50%;
        cursor: not-allowed;
    }

    &:focus {
        border: 1px solid ${theme.colors.white};
    }

    &:active {
        background-color: ${theme.colors.primary} !important;
        color: ${theme.colors.white} !important;
    }

    .icon {
        display: flex;
        position: relative;
        top: 2px;
        font-size: ${theme.fonts.size.SM};
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }
`