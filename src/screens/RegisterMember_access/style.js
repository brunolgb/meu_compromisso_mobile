import {
    StyleSheet
} from 'react-native';

import Colors from '../../styles/colors'
const Styles = StyleSheet.create({
    background:{
        backgroundColor: Colors.green
    },
    Container_login_and_registration:{
        alignItems:'center',
        backgroundColor: Colors.green,
        paddingTop: 20,
    },
    logoIasd:{
        width: 150,
        height: 150,
        marginTop: 40,
    },
    logoIasdImage:{
        width: 150,
        height: 150
    },
    fields:{
        width: 330,
        marginTop: 40,
    },
    controlsField:{
        marginVertical: 15,
        height: 55,
        position: 'relative',
    },
    controlsField_2box:{
        flexDirection: "row",
        marginVertical: 15,
        height: 55,
        position: 'relative',
    },
    fieldUf:{
        flex: 0.4,
        marginRight: 20,
    },
    fieldCountry:{
        flex: 1.4
    },
    label:{
        fontWeight: 'bold',
        color: Colors.green,
        position: 'absolute',
        top: 2,
        left: 10,
        opacity: 0,
        fontSize: 10,
        zIndex: 5,
    },
    label_moviment:{
        opacity: 1,
    },
    inputs: {
        height: 55,
        backgroundColor: Colors.white,
        borderRadius: 3,
        paddingHorizontal: 10,
        color: Colors.black,
        fontWeight: 'bold',
    },
    submit: {
        height: 50,
        backgroundColor: Colors.green,
        borderColor: Colors.white,
        borderWidth: 1.2,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextSubmit:{
        color: Colors.white
    },
    controlLinks:{
        width: 200,
        marginVertical: 40,
        backgroundColor: Colors.oragen,
        borderRadius: 5
    },
    linksLogin:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LinksLoginText:{
        color: Colors.white,
    },
    boxPasswordIcon:{
        width: 50,
        height: 50,
        position: "absolute",
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    passwordIcon:{
        width: 40, 
        height: 40,
    },
})

export default Styles;