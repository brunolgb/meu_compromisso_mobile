import { StyleSheet } from 'react-native';

import Colors from '../../styles/colors'

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.transparentModal,
        justifyContent: "center",
        alignItems: "center",
    },
    textModal:{
        color: Colors.white,
        fontSize: 16
    },
})

export default Styles;