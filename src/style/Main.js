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
    container:{
        flex: 1,
        backgroundColor: colors_patterns.green,
    },
    Container_login_and_registration:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colors_patterns.green
    },
    logoIasd:{
        width: 200,
        height: 200,
    },
    logoIasdImage:{
        width: 200,
        height: 200
    },
    fieldsLogin:{
        width: 350,
        height: 300,
        marginTop: 20,
    },
    controlsField:{
        marginVertical: 15,
        height: 50,
        position: 'relative',
    },
    label:{
        fontWeight: 'bold',
        color: colors_patterns.green,
        position: 'absolute',
        top: 15,
        left: 10,
        zIndex: 5,
    },
    inputs: {
        height: 50,
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
    }
})

export default Styles;