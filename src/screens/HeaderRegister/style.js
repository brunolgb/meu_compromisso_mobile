import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors'

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
        borderColor: Colors.greenLight,
        marginBottom: 12,
    },
    indicatorCircleNumber:{
        color: Colors.greenLight,
        fontWeight: "bold",
    },
    indicatorCircle_actived:{
        borderColor: Colors.greenLight,
        backgroundColor: Colors.greenLight,
        marginBottom: 12,
    },
    indicatorCircleNumber_actived:{
        color: Colors.green,
        fontWeight: "bold",
    },
    indicatorText:{
        color: Colors.white
    }
})
export default Style;