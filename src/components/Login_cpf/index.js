import * as React from 'react';
import Axios from 'axios';
import { valida_cpf, replaceForMask_CPF } from '../../utils/Masks';
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

function Login_cpf({ navigation }){
    const [keysPress_cpf, setKeysPress_cpf] = React.useState();
    const [cpf, setCpf] = React.useState();
    const [requestValidCPF, setRequestValidCPF] = React.useState("Próximo");

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
                    <TouchableOpacity
                        style={Styles.submit}
                        onPress={() => {
                            const validationResponse = valida_cpf(cpf);
                            if(!validationResponse)
                            {
                                //import MessageErrors from '../components/MessageErrors';
                            }
                            else{
                                setRequestValidCPF("Verificando");
                                Axios.post(`http://meu-compromisso-backend.herokuapp.com/validation/cpf`, {
                                    cpf: cpf,
                                })
                                .then(response => {
                                    setRequestValidCPF("Entrar")
                                    navigation.navigate('Password', {
                                        idMember: response.data.member
                                    })
                                })
                                .catch(error => {
                                    setRequestValidCPF("Próximo")
                                    console.log(error)
                                })
                            }
                        }}
                    >
                        <Text
                            style={Styles.TextSubmit}
                        >
                            {requestValidCPF}
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

const Styles_moviment = StyleSheet.create({
    label_cpf:{
        fontSize: 10,
        top: 2,
    },
})

export default Login_cpf;