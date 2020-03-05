import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,    
} from 'react-native';

import { 
    valida_cpf,
    replaceForMask_CPF,
    valida_phone,
    replaceForMask_phone,
    valida_birth,
    replaceForMask_birth
} from '../../utils/Masks';
import Styles from './style'
import HeaderRegister from '../HeaderRegister';

function RegisterMember_pessoal({ navigation }){
    const [name, setName] = React.useState();

    const [keysPress_cpf, setKeysPress_cpf] = React.useState();
    const [cpf, setCpf] = React.useState();

    const [keysPress_phone, setKeysPress_phone] = React.useState();
    const [phone, setPhone] = React.useState();

    const [mail, setMail] = React.useState();

    const [keysPress_birth, setKeysPress_birth] = React.useState();
    const [birth, setBirth] = React.useState();


    return(
        <KeyboardAvoidingView
        behavior="padding"
        style={Styles.Container_login_and_registration}>
            <HeaderRegister page="pessoal"/>
            <View style={Styles.fields}>
                <View style={Styles.controlsField}>
                    <Text style={[Styles.label, name ? Styles.label_moviment : Styles.label]}>Nome completo</Text>  
                    <TextInput
                    style={Styles.inputs}
                    placeholder="Nome completo"
                    placeholderTextColor='rgb(70,157,40)'
                    onChangeText={contentName => {
                        setName(contentName);
                    }}
                    maxLength={255}
                    />
                </View>
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
                    <Text style={[Styles.label, birth ? Styles.label_moviment : Styles.label]}>Data de nascimento</Text>  
                    <TextInput
                    style={Styles.inputs}
                    placeholder="Data de nascimento"
                    placeholderTextColor='rgb(70,157,40)'
                    onChangeText={contentBirth => {
                        setBirth(replaceForMask_birth(contentBirth, keysPress_birth));
                    }}
                    onKeyPress={keyPressed_birth=>{ setKeysPress_birth(keyPressed_birth.nativeEvent.key)}}
                    keyboardType="numeric"
                    maxLength={10}
                    value={birth}
                    />
                </View>
                <View style={Styles.controlsField}>
                    <Text style={[Styles.label, phone ? Styles.label_moviment : Styles.label]}>Celular</Text>  
                    <TextInput
                    style={Styles.inputs}
                    placeholder="Celular"
                    placeholderTextColor='rgb(70,157,40)'
                    onChangeText={contentPhone => {
                        setPhone(replaceForMask_phone(contentPhone, keysPress_phone));
                    }}
                    onKeyPress={keyPressed_phone=>{ setKeysPress_phone(keyPressed_phone.nativeEvent.key)}}
                    keyboardType="numeric"
                    maxLength={15}
                    value={phone}
                    />
                </View>
                <View style={Styles.controlsField}>
                    <Text style={[Styles.label, mail ? Styles.label_moviment : Styles.label]}>E-Mail</Text>  
                    <TextInput
                    style={Styles.inputs}
                    placeholder="E-Mail"
                    placeholderTextColor='rgb(70,157,40)'
                    onChangeText={contentMail => {
                        setMail(contentMail);
                    }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    maxLength={255}
                    value={mail}
                    />
                </View>
                <View style={Styles.controlsField}>
                    <TouchableOpacity style={Styles.submit}>
                        <Text style={Styles.TextSubmit}>
                            Próximo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.controlLinks}>
                <TouchableOpacity style={Styles.linksLogin} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={Styles.LinksLoginText}>Ja tenho uma conta!</Text>
                </TouchableOpacity>
            </View>            
        </KeyboardAvoidingView>
    )
}
export default RegisterMember_pessoal;