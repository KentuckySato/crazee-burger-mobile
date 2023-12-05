import { StyleSheet, Text, View } from "react-native"
import { theme } from "../../../theme"

export default function Welcome() {
    return (
        <View>
            <Text style={styles.h1}>Bienvenue chez nous !</Text>
            <View style={styles.hr}></View>
            <Text style={styles.h2}>Connectez-vous</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        maxHeight: '100%',
        color: theme.colors.primary,
        minWidth: 200,
        alignItems: 'center',
    },
    h1: {
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fonts.family.stylish,
        fontWeight: "700",
        fontSize: theme.fonts.size.P5,
    },
    h2: {
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fonts.family.stylish,
        fontWeight: "700",
        fontSize: theme.fonts.size.P4,
    },
    hr: {
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderColor: theme.colors.loginLine,
        marginVertical: theme.gridUnit * 5
    }
})

// const WelcomeStyled = styled.div`
//     h1, h2 {
//         color: ${theme.colors.white};
//         font-weight: ${theme.fonts.weights.bold};
//     }

//     h1 {
//         font-size: ${theme.fonts.size.P5};
//     }

//     h2 {
//         font-size: ${theme.fonts.size.P4};
//         margin: 20px 10px 10px;
//     }

//     hr {
// border: 1.5px solid ${theme.colors.loginLine};
// margin-bottom: ${theme.gridUnit * 5}px;
//     }
// `
