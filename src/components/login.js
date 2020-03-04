import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native';
import Styles from '../style/Main'

function Login(){
    const [cpf, setCpf] = React.useState();
    const [password, setPassword] = React.useState();
    let [IconPassword, setIconPassword] = React.useState('password-hidden.png');
    let [secureTextEntry_replace, setSecureTextEntry_replace] = React.useState(true);

    return(
        <KeyboardAvoidingView
        behavior="padding"
        style={Styles.Container_login_and_registration}>
            <View style={Styles.logoIasd}>
                <Image
                source={require('../assets/logoIgreja-larger.png')}
                style={Styles.logoIasdImage}
                />
            </View>
            <View style={Styles.fieldsLogin}>
                <View style={Styles.controlsField}>
                    <Text style={Styles.label}>CPF</Text>
                    <TextInput
                    style={Styles.inputs}
                    onChangeText={contentCPF => setCpf(contentCPF)}
                    onFocus={() => {
                        moveLabel("cpf")
                    }}
                    />
                </View>
                <View style={Styles.controlsField}>
                    <Text style={Styles.label}>Senha</Text>
                    <TextInput
                        style={Styles.inputs}
                        secureTextEntry={secureTextEntry_replace}
                        onChangeText={contentPassword => setPassword(contentPassword)}
                    />
                    <TouchableOpacity 
                    style={Styles.boxPasswordIcon}
                    onPress={() => {
                        if(IconPassword != undefined)
                        {
                            if(IconPassword == "password-hidden.png")
                            {
                                setIconPassword('password-show.png')
                                setSecureTextEntry_replace(false)
                            }
                            else{
                                setIconPassword('password-hidden.png')
                                setSecureTextEntry_replace(true)
                            }
                        }
                    }}
                    >
                        {
                            IconPassword.indexOf("show") > 0?
                            <Image
                                source={require(`../assets/password-show.png`)}
                                style={Styles.passwordIcon}
                            /> :
                            <Image
                                source={require(`../assets/password-hidden.png`)}
                                style={Styles.passwordIcon}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={Styles.controlsField}>
                    <TouchableOpacity style={Styles.submit}>
                        <Text style={Styles.TextSubmit}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={Styles.linksLogin}>
                    <Text style={Styles.LinksLoginText}>Cadastrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.linksLogin}>
                    <Text style={Styles.LinksLoginText}>Esqueci minha senha!</Text>
                </TouchableOpacity>
            </View>            
        </KeyboardAvoidingView>
    )
}

function moveLabel(props)
{
    console.log(props)
}

export default Login;