// import styled from 'styled-components'
// import { theme } from '../../theme/index'
import { Image, Text, View } from 'react-native'

type LogoProps = {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function Logo({ className, onClick }: LogoProps) {
    return (
        <View>
            <Text>Crazee</Text>
            {/* <Image source={require("./src/res/images/logo-burger.png")} /> */}
            <Text>Burger</Text>
        </View>
    )
}

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

//     img {
//         object-fit: contain;
//         object-position: center center;
//         height: 60px;
//         width: 80px;
//         margin: 0px 5px;
//     }

//     @media(max-width: 700px) {
//         min-width: auto;
//         h1 {
//             display: none;
//         }
//     }
// `