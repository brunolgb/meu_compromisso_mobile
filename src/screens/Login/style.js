import {
    StyleSheet
} from 'react-native';
import Colors from '../../styles/colors'

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.green,
    },
    Container_login_and_registration:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.green
    },
    logoIasd:{
        width: 150,
        height: 150,
    },
    logoIasdImage:{
        width: 150,
        height: 150
    },
    fieldsLogin:{
        width: 330,
        marginTop: 40,
    },
    controlsField:{
        marginVertical: 15,
        height: 55,
        position: 'relative',
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
    linksLogin:{
        height: 50,
        marginTop: 40,
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