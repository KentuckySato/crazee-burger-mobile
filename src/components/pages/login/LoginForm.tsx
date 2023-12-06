import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import InputText from '../../shared/InputText'
// import { authenticateUser } from '../../../api/user'
import Welcome from './Welcome'
import { Button, TextInput, StyleSheet, View, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { theme } from '../../../theme'
import styled from 'styled-components/native'

export default function LoginForm() {
    // State
    const [username, setUsername] = useState('')
    const usernameFieldRef = useRef<HTMLInputElement>(null)
    // const navigate = useNavigate()

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
        Alert.alert(username)

        // const userReceived = await authenticateUser(username)

        setUsername("")
        // navigate(`order/${userReceived.username}`)
    }

    const handleChange = (newUsername: string) => setUsername(newUsername)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            pointerEvents='box-none'
            keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 20}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LoginFormStyled>
                    <Welcome />
                    {/* <InputText
                        leftIcon={<BsPersonCircle />}
                        name="firstname"
                        placeholder="Entrez votre prénom"
                        value={username}
                        required={true}
                        onChange={handleChange}
                        className='input-login'
                        ref={usernameFieldRef}
                        autoFocus={true}
                    /> */}

                    <TextInputStyled
                        autoFocus={true}
                        placeholder="Entrez votre prénom"
                        placeholderTextColor={theme.colors.greyDark}
                        onChangeText={newUsername => handleChange(newUsername)}
                        onSubmitEditing={handleSubmit}
                        defaultValue={username}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    // style={styles.input}
                    />

                    <ButtonContainerStyled>
                        <ButtonStyled color={theme.colors.white} title='Accéder à mon espace' onPress={handleSubmit} />
                    </ButtonContainerStyled>

                </LoginFormStyled>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const LoginFormStyled = styled.View`
    text-align: center;
    font-family: "Amatic SC";
    /* max-width: 500px;
    min-width: 400px; */
    margin: 0 auto;
    padding: 2.5rem ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.XS};

`

const TextInputStyled = styled(TextInput)`
    height: 40px;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.white};
    margin: 18px 0px;
    padding: 0px 10px;
    border-width: 1px;
    border-color: white;
    border-radius: 15px;
    font-size: ${theme.fonts.size.XS};
`

const ButtonContainerStyled = styled.View`
    width: 100%;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.extraRound};
    font-size: ${theme.fonts.size.XS};
`
const ButtonStyled = styled.Button`
    width: 100%;
    color: ${theme.colors.red};
    font-size: ${theme.fonts.size.XS};
`