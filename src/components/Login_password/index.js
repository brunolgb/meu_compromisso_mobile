import * as React from 'react';
import Axios from 'axios';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import Styles from './style'

function Login_password({route, navigation})
{
    const [password, setPassword] = React.useState();
    const [movLabel, setMovLabel] = React.useState(false);
    const [requestValidPassword, setRequestValidPassword] = React.useState("Entrar");
    let [IconPassword, setIconPassword] = React.useState('password-hidden.png');
    let [secureTextEntry_replace, setSecureTextEntry_replace] = React.useState(true);

    return(
        <KeyboardAvoidingView
        behavior="padding"
        style={Styles.Container_login_and_registration}>
            <View style={Styles.logoIasd}>
                <Image
                source={require('../../assets/logoIgreja-larger.png')}
                style={Styles.logoIasdImage}
                />
            </View>
            
            <View style={Styles.fieldsLogin}>
                <View style={Styles.controlsField}>
                <Text style={[Styles.label, password ? Styles.label_moviment : Styles.label]}>Senha</Text>  
                    <TextInput
                    style={Styles.inputs}
                    placeholder="Senha"
                    placeholderTextColor='rgb(70,157,40)'
                    onChangeText={contentPassword => {
                        setPassword(contentPassword);
                    }}
                    onFocus={() => {
                        setMovLabel(true)
                    }}
                    secureTextEntry={secureTextEntry_replace}
                    autoCapitalize="none"
                    maxLength={255}
                    value={password}
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
                                    source={require(`../../assets/password-show.png`)}
                                    style={Styles.passwordIcon}
                                /> :
                                <Image
                                    source={require(`../../assets/password-hidden.png`)}
                                    style={Styles.passwordIcon}
                                />
                            }
                    </TouchableOpacity>
                </View>
                <View style={Styles.controlsField}>
                    <TouchableOpacity
                        style={Styles.submit}
                        onPress={() => {
                            setRequestValidPassword("Verificando");
                            Axios.post(`http://meu-compromisso-backend.herokuapp.com/validation/password`, {
                                member: route.params.idMember,
                                password_access: password,
                            })
                            .then(response => {
                                const { message, status } = response.data
                                if(status == undefined)
                                {
                                    setRequestValidPassword("Entrou")
                                }
                                else
                                {
                                    setRequestValidPassword(message)
                                }
                            })
                            .catch(error => {
                                setRequestValidPassword("Entrar")
                            })
                        }}
                    >
                        <Text
                            style={Styles.TextSubmit}
                        >
                            {requestValidPassword}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={Styles.linksLogin}>
                    <Text style={Styles.LinksLoginText}>Esqueci minha senha!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.linksLogin} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={Styles.LinksLoginText}>Digitar outro CPF</Text>
                </TouchableOpacity>
            </View>            
        </KeyboardAvoidingView>
    )
}

export default Login_password;