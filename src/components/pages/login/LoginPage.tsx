import { theme } from "../../../theme"
import Logo from "../../shared/Logo"
import LoginForm from "./LoginForm"
// import { fadeInAnimation } from "../../../theme/animations"
import { ImageBackground, StyleSheet, View } from "react-native"

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../res/images/burger-background.jpg')} resizeMode="cover" style={styles.img}></ImageBackground>
            <Logo className={"logo-login-page"} />
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: theme.colors.primary,
        alignItems: 'center',
        // backgroud: `url("") center center / cover #000000b2`,
    },
    img: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.5,
        // backgroundBlendMode: 'darken',
        // backgroundColor: '#000000b2',
        inset: 0

        // flex: 1,
        // justifyContent: 'center',
    }
})

// const LoginPageStyled = styled.div`

//   height: 100vh;
//   width: auto;
//   display: flex;
//   flex-direction: column;
//   -webkit-box-pack: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   align-items: center;
//   animation: ${fadeInAnimation} ${theme.animations.speed.slowPlus} ease-in;

//   &::before {
//     content: "";
//     background: url("/images/burger-background.jpg") center center / cover #000000b2;
//     background-blend-mode: darken;
//     position: absolute;
//     inset: 0px;
//     z-index: -1;
//   }

//   .logo-login-page {
//       transform: scale(2.5);
//   }

//   @media(max-width: 768px) {
//     .logo-login-page {
//         transform: scale(1.5);
//     }
//   }
// `