import {
    StyleSheet
} from 'react-native';

const colors_patterns = {
    green: 'rgb(70,157,40)',
    greenLight: 'rgb(121, 242, 0)',
    white: '#fff',
    oragen: 'rgb(240, 158, 0)',
    black: '#555',
}

const Styles = StyleSheet.create({
    background:{
        backgroundColor: colors_patterns.green
    },
    Container_login_and_registration:{
        alignItems:'center',
        backgroundColor: colors_patterns.green,
        paddingTop: 20,
    },
    logoIasd:{
        width: 150,
        height: 150,
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
    label:{
        fontWeight: 'bold',
        color: colors_patterns.green,
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
        backgroundColor: colors_patterns.white,
        borderRadius: 3,
        paddingHorizontal: 10,
        color: colors_patterns.black,
        fontWeight: 'bold',
    },
    submit: {
        height: 50,
        backgroundColor: colors_patterns.green,
        borderColor: colors_patterns.white,
        borderWidth: 1.2,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextSubmit:{
        color: colors_patterns.white
    },
    controlLinks:{
        marginVertical: 40,
    },
    linksLogin:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LinksLoginText:{
        color: colors_patterns.white,
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