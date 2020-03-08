import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    container:{
        width: 250,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222',
        borderRadius: 3,
        padding: 10,
        overflow: "hidden",
    },
    container_mov:{
        right: 20
    },
    message:{
        color: "#fff",
        fontWeight: "bold",
    },
    progress:{
        alignSelf: "flex-start",
        width: 250,
        height: 5,
        backgroundColor: "#F09E00",
        position: "absolute",
        bottom: 0,
    }
})
export default Style;