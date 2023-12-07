import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import InputText from '../../shared/InputText'
// import { authenticateUser } from '../../../api/user'
import Welcome from './Welcome'
import { TextInput, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { theme } from '../../../theme'
import styled from 'styled-components/native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

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
        // Alert.alert(username)

        // const userReceived = await authenticateUser(username)

        setUsername("")
        navigate('Order', { username: username })
        // navigate("Order")
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
                            <ButtonText style={{ color: pressed ? theme.colors.primary : theme.colors.white }}>Accéder à mon espace</ButtonText>
                        )}
                    </ButtonContainerStyled>


                </LoginFormStyled>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const LoginFormStyled = styled.View`
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
    width: 100%;
    border-radius: ${theme.borderRadius.extraRound};
`
const ButtonText = styled.Text`
    width: 100%;
    padding: 10px 15px;
    color: ${theme.colors.primary};
    text-align: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    font-weight: bold;
`