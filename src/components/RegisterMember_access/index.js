import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Dimensions,
    ScrollView,
} from 'react-native';
import api from '../../api'

import Styles from './style'
import HeaderRegister from '../HeaderRegister';

function RegisterMember_access({ route, navigation }){
    const [password_one, setPassword_one] = React.useState();
    const [iconPassword_one, setIconPassword_one] = React.useState('password-hidden.png');
    const [secureTextEntry_replace_one, setSecureTextEntry_replace_one] = React.useState(true);

    const [password_two, setPassword_two] = React.useState();
    const [iconPassword_two, setIconPassword_two] = React.useState('password-hidden.png');
    const [secureTextEntry_replace_two, setSecureTextEntry_replace_two] = React.useState(true);

    const [btnSubmit, setBtnSubmit] = React.useState("Salvar");

    const { height } = Dimensions.get('window')

    return(
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-350}>
        <ScrollView style={[Styles.bakcground]}>
            <View style={[Styles.Container_login_and_registration, {height: height}]}>
                <HeaderRegister page="access"/>
                <View style={Styles.fields}>
                    <View style={Styles.controlsField}>
                        <Text style={[Styles.label, password_one ? Styles.label_moviment : Styles.label]}>Senha</Text>  
                        <TextInput
                        style={Styles.inputs}
                        placeholder="Senha"
                        placeholderTextColor='rgb(70,157,40)'
                        onChangeText={contentPassword => {
                            setPassword_one(contentPassword);
                        }}
                        onFocus={() => {
                            setIconPassword_two('password-hidden.png')
                            setSecureTextEntry_replace_two(true)
                        }}
                        secureTextEntry={secureTextEntry_replace_one}
                        autoCapitalize="none"
                        maxLength={255}
                        value={password_one}
                        />
                        <TouchableOpacity 
                            style={Styles.boxPasswordIcon}
                            onPress={() => {
                                if(iconPassword_one != undefined)
                                {
                                    if(iconPassword_one == "password-hidden.png")
                                    {
                                        setIconPassword_one('password-show.png')
                                        setSecureTextEntry_replace_one(false)
                                    }
                                    else{
                                        setIconPassword_one('password-hidden.png')
                                        setSecureTextEntry_replace_one(true)
                                    }
                                }
                            }}
                            >
                                {
                                    iconPassword_one.indexOf("show") > 0?
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
                        <Text style={[Styles.label, password_two ? Styles.label_moviment : Styles.label]}>Repita a senha</Text>  
                        <TextInput
                        style={Styles.inputs}
                        placeholder="Repita a senha"
                        placeholderTextColor='rgb(70,157,40)'
                        onChangeText={contentPassword => {
                            setPassword_two(contentPassword);
                        }}
                        onFocus={() => {
                            setIconPassword_one('password-hidden.png')
                            setSecureTextEntry_replace_one(true)
                        }}
                        secureTextEntry={secureTextEntry_replace_two}
                        autoCapitalize="none"
                        maxLength={255}
                        value={password_two}
                        />
                        <TouchableOpacity 
                            style={Styles.boxPasswordIcon}
                            onPress={() => {
                                if(iconPassword_two != undefined)
                                {
                                    if(iconPassword_two == "password-hidden.png")
                                    {
                                        setIconPassword_two('password-show.png')
                                        setSecureTextEntry_replace_two(false)
                                    }
                                    else{
                                        setIconPassword_two('password-hidden.png')
                                        setSecureTextEntry_replace_two(true)
                                    }
                                }
                            }}
                            >
                                {
                                    iconPassword_two.indexOf("show") > 0?
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
                        <TouchableOpacity style={Styles.submit} onPress={() => {
                            setBtnSubmit("Salvando")
                            if(password_one == password_two)
                            {
                                console.log(route.params.idMember)
                                api.post("access/add", {
                                    member: route.params.idMember,
                                    password_access: password_two,
                                    privileges_m:"normal"
                                })
                                .then(res => {
                                    const {message, status, complete_erro} = res.data
                                    if(status == "ok")
                                    {
                                        navigation.navigate("CPF")
                                    }
                                    else
                                    {
                                        setBtnSubmit("Salvar")
                                    }
                                })
                            }
                        }}>
                            <Text style={Styles.TextSubmit}>
                                {btnSubmit}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>  
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default RegisterMember_access;