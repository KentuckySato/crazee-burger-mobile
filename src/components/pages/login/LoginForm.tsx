import React, { useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import InputText from '../../shared/InputText'
// import { authenticateUser } from '../../../api/user'
import Welcome from './Welcome'
import { ScrollView, Button, TextInput, StyleSheet, View, Alert } from 'react-native'
import { theme } from '../../../theme'

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
        // fontSize: theme.fonts.size.XS,
    },
    input: {
        display: 'flex',
        // alignSelf: 'center',
        // width: '100%',
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
        display: 'flex',
        fontSize: theme.fonts.size.XS,
        paddingVertical: 3,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.primary,
        borderRadius: 15,
        textAlign: 'center',
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
