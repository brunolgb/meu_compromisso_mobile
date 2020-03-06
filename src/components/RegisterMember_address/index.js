import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import api from '../../api'
import Axios from 'axios'
import { replaceForMask_cep } from '../../utils/Masks'
import DateHandling from '../../utils/DateHandling'

import Styles from './style'
import HeaderRegister from '../HeaderRegister';

function RegisterMember_address({ route, navigation }){
    const [keysPress_cep, setKeysPress_cep] = React.useState();
    const [cep, setCep] = React.useState();
    const [address, setAddress] = React.useState();
    const [neightborhood, setNeightborhood] = React.useState();
    const [referencesAddress, setReferencesAddress] = React.useState();
    const [city, setCity] = React.useState();
    const [state, setState] = React.useState();
    const [country, setCountry] = React.useState("Brasil");

    const [btnSubmit, setBtnSubmit] = React.useState("Próximo");

    return(
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-200}>
        <ScrollView style={[Styles.bakcground]}>
            <View style={Styles.Container_login_and_registration}>
                <HeaderRegister page="address"/>
                <View style={Styles.fields}>
                    <View style={Styles.controlsField}>
                        <Text style={[Styles.label, cep ? Styles.label_moviment : Styles.label]}>CEP</Text>  
                        <TextInput
                        style={Styles.inputs}
                        placeholder="CEP"
                        placeholderTextColor='rgb(70,157,40)'
                        onChangeText={content => {
                            setCep(replaceForMask_cep(content, keysPress_cep));
                        }}
                        onBlur={() => {
                            if(cep != undefined)
                            {
                                if(cep.length == 9)
                                {
                                    const url = `https://viacep.com.br/ws/${cep}/json/`;
                                    Axios.get(url)
                                    .then(response =>{
                                        const { cep, logradouro, complemento, bairro, localidade, uf } = response.data;
                                        setCep(cep);
                                        setAddress(logradouro);
                                        setReferencesAddress(complemento);
                                        setNeightborhood(bairro);
                                        setCity(localidade);
                                        setState(uf)
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                                }
                            }
                        }}
                        onKeyPress={keyPressed=>{ setKeysPress_cep(keyPressed.nativeEvent.key)}}
                        keyboardType="numeric"
                        maxLength={9}
                        value={cep}
                        />
                    </View>
                    <View style={Styles.controlsField}>
                        <Text style={[Styles.label, address ? Styles.label_moviment : Styles.label]}>Endereço</Text>  
                        <TextInput
                        style={Styles.inputs}
                        placeholder="Endereço"
                        placeholderTextColor='rgb(70,157,40)'
                        onChangeText={contentCep => {
                            setAddress(contentCep);
                        }}
                        autoCapitalize="words"
                        maxLength={255}
                        value={address}
                        />
                    </View>
                    <View style={Styles.controlsField}>
                        <Text style={[Styles.label, neightborhood ? Styles.label_moviment : Styles.label]}>Bairro</Text>  
                        <TextInput
                        style={Styles.inputs}
                        placeholder="Bairro"
                        placeholderTextColor='rgb(70,157,40)'
                        onChangeText={contentNeightborhood => {
                            setNeightborhood(contentNeightborhood);
                        }}
                        maxLength={255}
                        autoCapitalize="words"
                        value={neightborhood}
                        />
                    </View>
                    <View style={Styles.controlsField}>
                        <Text style={[Styles.label, referencesAddress ? Styles.label_moviment : Styles.label]}>Referência do endereço</Text>  
                        <TextInput
                        style={Styles.inputs}
                        placeholder="Referência do endereço"
                        placeholderTextColor='rgb(70,157,40)'
                        onChangeText={content => {
                            setReferencesAddress(content);
                        }}
                        maxLength={100}
                        value={referencesAddress}
                        />
                    </View>
                    <View style={Styles.controlsField}>
                        <Text style={[Styles.label, city ? Styles.label_moviment : Styles.label]}>Cidade</Text>  
                        <TextInput
                        style={Styles.inputs}
                        placeholder="Cidade"
                        placeholderTextColor='rgb(70,157,40)'
                        onChangeText={content => {
                            setCity(content);
                        }}
                        autoCapitalize="words"
                        maxLength={255}
                        value={city}
                        />
                    </View>
                    <View style={Styles.controlsField_2box}>
                        <View style={Styles.fieldUf}>
                            <Text style={[Styles.label, state ? Styles.label_moviment : Styles.label]}>UF</Text>  
                            <TextInput
                            style={Styles.inputs}
                            placeholder="UF"
                            placeholderTextColor='rgb(70,157,40)'
                            onChangeText={content => {
                                setState(content);
                            }}
                            autoCapitalize="characters"
                            maxLength={2}
                            value={state}
                            />
                        </View>
                        <View style={Styles.fieldCountry}>
                            <Text style={[Styles.label, country ? Styles.label_moviment : Styles.label]}>País</Text>  
                            <TextInput
                            style={Styles.inputs}
                            placeholder="País"
                            placeholderTextColor='rgb(70,157,40)'
                            onChangeText={content => {
                                setCountry(content);
                            }}
                            autoCapitalize="sentences"
                            maxLength={100}
                            value={country}
                            />
                        </View>
                    </View>
                    <View style={Styles.controlsField}>
                        <TouchableOpacity style={Styles.submit} onPress={() => {
                            setBtnSubmit("Salvando dados")
                            const {
                                complete_name,
                                contact_phone,
                                cpf,
                                date_of_birth,
                                mail
                            } = route.params;
                            const birth = DateHandling.replacetoAmeric(date_of_birth)

                            api.post("/member/add", {
                                complete_name: complete_name,
                                cpf: cpf,
                                date_of_birth: birth,
                                contact_phone: contact_phone,
                                mail: mail,
                                zipcode: cep,
                                address: address,
                                neightborhood: neightborhood,
                                references_address: referencesAddress,
                                city: city,
                                state: state,
                                country: country
                            })
                            .then(response => {
                                if(response.data.status == "ok")
                                {
                                    setBtnSubmit("Redirecionando")
                                    api.post("validation/cpf", {
                                        cpf: cpf
                                    })
                                    .then(res_idMember => {
                                        
                                        if(res_idMember.data.status != undefined)
                                        {
                                            navigation.push("Register_member_access", {
                                                idMember: res_idMember.data.member
                                            })
                                        }
                                        else{
                                            setBtnSubmit("Erro ao redirecionar")
                                            alert(res_idMember.data.message)
                                        }
                                    })
                                    .catch(error => {
                                        console.log("Erro ao cadastrar")
                                    })
                                }
                                else{
                                    setBtnSubmit("Erro ao cadastrar")
                                    console.log(response.data)
                                }
                            })
                            .catch(error_cad => {
                                console.log(error_cad)
                            })
                        }}>
                            <Text style={Styles.TextSubmit}>
                                {btnSubmit}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Styles.controlLinks}>

                    <TouchableOpacity style={Styles.linksLogin} onPress={() => {
                        navigation.goBack()
                    }}>
                        <Text style={Styles.LinksLoginText}>Voltar</Text>
                    </TouchableOpacity>
                </View>            
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default RegisterMember_address;