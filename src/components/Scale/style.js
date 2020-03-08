import { StyleSheet } from 'react-native';

const colors_patterns = {
    green: 'rgb(70,157,40)',
    greenLight: 'rgb(121, 242, 0)',
    white: '#fff',
    oragen: 'rgb(240, 158, 0)',
    black: '#555',
    blackLightBack: "#EEE"
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors_patterns.white,
    },
    content:{
        flex: 1,
        backgroundColor: colors_patterns.blackLightBack,
        padding: 10,
    }
})

export default Styles;