import React, { useRef, useState } from 'react'
import Welcome from './Welcome'
import { TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { theme } from '../../../theme'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

export default function LoginForm() {
    // State
    const [username, setUsername] = useState('')
    const usernameFieldRef = useRef<HTMLInputElement>(null)
    // const navigate = useNavigate()
    const { navigate } = useNavigation()

    const [isInputFocused, setInputFocused] = useState(false)

    const handleInputFocus = () => {
        setInputFocused(true)
    }

    const handleInputBlur = () => {
        setInputFocused(false)
    }

    // Effects
    const handleSubmit = async () => {
        if (!username) return

        // const userReceived = await authenticateUser(username)

        setUsername("")
        navigate('Order', { username: username })
    }

    const handleChange = (newUsername: string) => setUsername(newUsername)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            pointerEvents='box-none'
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 20}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LoginFormStyled>
                    <Welcome />
                    <TextInputStyled
                        placeholder="Entrez votre prénom"
                        placeholderTextColor={theme.colors.greyDark}
                        onChangeText={newUsername => handleChange(newUsername)}
                        onSubmitEditing={handleSubmit}
                        defaultValue={username}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />

                    <ButtonContainerStyled onPress={handleSubmit} style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? theme.colors.white : theme.colors.primary,
                        },
                    ]}>
                        {({ pressed }) => (
                            <ButtonTextStyled style={{ color: pressed ? theme.colors.primary : theme.colors.white }}>Accéder à mon espace</ButtonTextStyled>
                        )}
                    </ButtonContainerStyled>
                </LoginFormStyled>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const LoginFormStyled = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0px 60px;
    text-align: center;
    font-family: "Amatic SC";
    margin: 0 auto;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.XS};
`

const TextInputStyled = styled(TextInput)`
    height: 40px;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.white};
    margin: 18px 0px;
    padding: 0px 15px;
    border-width: 1px;
    border-color: white;
    border-radius: 15px;
    font-size: ${theme.fonts.size.P0};
`

const ButtonContainerStyled = styled.Pressable`
    width: "100%";
    border-radius: ${theme.borderRadius.extraRound};
`
const ButtonTextStyled = styled.Text`
    width: 100%;
    padding: 10px 15px;
    color: ${theme.colors.primary};
    text-align: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    font-weight: bold;
`