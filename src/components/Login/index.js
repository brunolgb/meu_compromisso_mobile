import * as React from 'react'
import api from '../../api'
import { replaceForMask_CPF } from '../../utils/Masks'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import Styles from './style'

function Login({ navigation }){

    const [keysPress_cpf, setKeysPress_cpf] = React.useState();
    const [cpf, setCpf] = React.useState();

    const [password, setPassword] = React.useState();
    const [btnSubmit, setBtnSubmit] = React.useState("Entrar");
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
                    <Text style={[Styles.label, cpf ? Styles.label_moviment : Styles.label]}>CPF</Text>  
                    <TextInput
                    style={Styles.inputs}
                    placeholder="CPF"
                    placeholderTextColor='rgb(70,157,40)'
                    onChangeText={contentCPF => {
                        setCpf(replaceForMask_CPF(contentCPF, keysPress_cpf));
                    }}
                    onKeyPress={keyPressed=>{ setKeysPress_cpf(keyPressed.nativeEvent.key)}}
                    keyboardType="numeric"
                    maxLength={14}
                    value={cpf}
                    />
                </View>
                <View style={Styles.controlsField}>
                    <Text style={[Styles.label, password ? Styles.label_moviment : Styles.label]}>Senha</Text>  
                    <TextInput
                    style={Styles.inputs}
                    placeholder="Senha"
                    placeholderTextColor='rgb(70,157,40)'
                    onChangeText={contentPassword => {
                        setPassword(contentPassword);
                    }}
                    secureTextEntry={secureTextEntry_replace}
                    autoCapitalize="none"
                    maxLength={255}
                    value={password}
                    />
                    <TouchableOpacity 
                        style={Styles.boxPasswordIcon}
                        onPress={() => {
                            if(secureTextEntry_replace)
                            {
                                setSecureTextEntry_replace(false)
                            }
                            else{
                                setSecureTextEntry_replace(true)
                            }
                        }}
                        >
                            {
                                secureTextEntry_replace ?
                                <Image
                                    source={require(`../../assets/password-hidden.png`)}
                                    style={Styles.passwordIcon}
                                /> :
                                <Image
                                    source={require(`../../assets/password-show.png`)}
                                    style={Styles.passwordIcon}
                                />
                            }

                    </TouchableOpacity>
                </View>
                <View style={Styles.controlsField}>
                    <TouchableOpacity
                        style={Styles.submit}
                        onPress={() => {
                            setBtnSubmit("Verificando");
                            if(cpf != undefined && password != undefined)
                            {
                                api.post(`/validation`, {
                                    cpf: cpf,
                                    password_access: password,
                                })
                                .then(response => {
                                    const { message, status } = response.data
                                    if(status == undefined)
                                    {
                                        console.log(response.data[0])
                                        //insertData(response.data[0], navigation);
                                        setBtnSubmit("Entrar")
                                    }
                                    else
                                    {
                                        Alert.alert("Atenção", message)
                                        setBtnSubmit("Entrar")
                                    }
                                })
                                .catch(error => {
                                    Alert.alert("Erro", "Aconteceu algum erro inesperado! Tente novamente!")
                                    setBtnSubmit("Entrar")
                                })
                            }
                            else{
                                Alert.alert("Atenção", "CPF e Senha são obrigatórios!")
                                setBtnSubmit("Entrar")
                            }
                        }}
                    >
                        <Text
                            style={Styles.TextSubmit}
                        >
                            {btnSubmit}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.controlLinks}>
                <TouchableOpacity style={Styles.linksLogin} onPress={() => {navigation.navigate("Register_member_pessoal")}}>
                    <Text style={Styles.LinksLoginText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>            
        </KeyboardAvoidingView>
    )
}

export default Login;