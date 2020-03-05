import { StyleSheet } from 'react-native';

const colors_patterns = {
    green: 'rgb(70,157,40)',
    greenLight: 'rgb(121, 242, 0)',
    white: '#fff',
    oragen: 'rgb(240, 158, 0)',
    black: '#555',
}

const Style = StyleSheet.create({
    container:{
        width: 330,
        height: 80,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    indicator:{
        flex: 1,
        alignItems: "center",
    },
    indicatorCircle:{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors_patterns.greenLight,
        marginBottom: 12,
    },
    indicatorCircleNumber:{
        color: colors_patterns.greenLight,
        fontWeight: "bold",
    },
    indicatorCircle_actived:{
        borderColor: colors_patterns.greenLight,
        backgroundColor: colors_patterns.greenLight,
        marginBottom: 12,
    },
    indicatorCircleNumber_actived:{
        color: colors_patterns.green,
        fontWeight: "bold",
    },
    indicatorText:{
        color: colors_patterns.white
    }
})
export default Style;