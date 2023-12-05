import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import styled from "styled-components"
// import { theme } from '../../../theme'
import InputText from '../../shared/InputText'
// import { BsChevronRight, BsPersonCircle } from "react-icons/bs"
// import Button from '../../shared/Button'
// import { authenticateUser } from '../../../api/user'
import Welcome from './Welcome'
import { ScrollView, Button, TextInput, StyleSheet, View, Alert } from 'react-native'
import { theme } from '../../../theme'
// import { Alert, Button, StyleSheet, View } from 'react-native';
// import {Alert, Button, StyleSheet, View} from 'react-native';

export default function LoginForm() {
    // State
    const [username, setUsername] = useState('')
    const usernameFieldRef = useRef<HTMLInputElement>(null)
    // const navigate = useNavigate()

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
        <View style={styles.container}>
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

            <TextInput
                autoFocus={true}
                placeholder="Entrez votre prénom"
                placeholderTextColor={theme.colors.greyDark}
                onChangeText={newUsername => handleChange(newUsername)}
                defaultValue={username}
                style={styles.input}
            />

            <View style={styles.button}>
                <Button color={theme.colors.white} title='Accéder à mon espace' onPress={handleSubmit} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        maxHeight: '100%',
        maxWidth: 400,
        paddingVertical: 20,
        paddingHorizontal: 32,
        marginVertical: 0,
        marginHorizontal: 'auto',
        borderRadius: 10,
    },
    input: {
        height: 40,
        color: theme.colors.dark,
        backgroundColor: theme.colors.white,
        marginVertical: 18,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
    },
    button: {
        width: '100%',
        fontSize: theme.fonts.size.SM,
        paddingVertical: 3,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.primary,
        borderRadius: 15,
        textAlign: 'center',
        alignSelf: 'center',
        lineHeight: 18,
    }
})

// const LoginFormStyled = styled.form`

//     text-align: center;
//     font-family: "Amatic SC", cursive;
//     max-width: 500px;
//     min-width: 400px;
//     margin: 0 auto;
//     padding: 2.5rem ${theme.spacing.lg};
//     border-radius: ${theme.borderRadius.round};

//     button {
//         width: 100%;
//     }

//     .input-login {
//         margin: 18px 0px;
//     }

//     @media(max-width: 768px) {
//         min-width: 300px;
//         max-width: 100%;
//         padding: 0;
//     }
// `
