// import styled from 'styled-components'
import { theme } from '../../theme/index'
import { Image, StyleSheet, Text, View } from 'react-native'

type LogoProps = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Logo({ className, onClick }: LogoProps) {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Crazee</Text> */}
            <Image style={styles.img} source={require('../../res/images/logo-burger.png')} />
            {/* <Text style={styles.text}>Burger</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        maxHeight: '100%',
        color: theme.colors.primary,
        alignItems: 'center',
        transform: [{ scale: 1.5 }],
    },
    scrollView: {
        marginHorizontal: 0,
    },
    text: {
        display: 'flex',
        textAlign: 'center',
        color: theme.colors.primary,
        fontFamily: theme.fonts.family.stylish,
        fontSize: theme.fonts.size.P4,
    },
    img: {
        objectFit: "contain",
        // object: "",
        // object: "center center",
        height: 60,
        width: 80,
        marginBottom: 30,
        marginHorizontal: 5,
    }
})

// const LogoStyled = styled.div`
//     display: flex;
//     color: ${theme.colors.primary};
//     max-height: 100%;
//     min-width: 200px;
//     align-items: center;

//     h1 {
//         display: inline;
//         text-align: center;
//         color: ${theme.colors.primary};
//         font-size: ${theme.fonts.size.P4};
//         line-height: 1em;
//         font-weight: ${theme.fonts.weights.bold};
//         text-transform: uppercase;
//         letter-spacing: 1.5px;
//         font-family: "Amatic SC", cursive;
//     }

// img {
//     object-fit: contain;
//     object-position: center center;
//     height: 60px;
//     width: 80px;
//     margin: 0px 5px;
// }

//     @media(max-width: 700px) {
//         min-width: auto;
//         h1 {
//             display: none;
//         }
//     }
// `