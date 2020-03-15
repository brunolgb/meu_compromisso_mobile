import { StyleSheet } from 'react-native';

import Colors from '../../styles/colors'

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
    },
    content:{
        flex: 1,
        backgroundColor: Colors.blackLightBack,
        padding: 10,
    }
})

export default Styles;