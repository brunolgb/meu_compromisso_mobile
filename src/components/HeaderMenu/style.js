import { StyleSheet } from 'react-native';

const colors_patterns = {
    green: 'rgb(70,157,40)',
    greenLight: 'rgb(121, 242, 0)',
    white: '#fff',
    oragen: 'rgb(240, 158, 0)',
    black: '#555',
}

const Styles = StyleSheet.create({
    nav:{
        flexDirection: "row",
        alignItems: "center",
        height: 90,
        backgroundColor: colors_patterns.green,
        paddingTop: 20,
    },
    navChildrenPattern:{
        flex:1,
        height: 70,
    },
    btnMenu:{
        flex: 0.2,
    },
    iconMenu:{
        width: 40,
        height: 40,
    },
    imageLogo:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    iconLogo:{
        width: 60,
        height: 60,
    },
    profile:{
        flex: 0.2,
    },
    iconProfile:{
        width: 30,
        height: 30,
    },
    btnHeaders:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Styles;