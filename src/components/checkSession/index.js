import React, {useState, useEffect} from 'react'
import {Modal,View, Text} from 'react-native'

import Styles from './style'
function Session()
{
    const [check, setCheckValidation] = useState(false);
    useEffect(()=>{
        setCheckValidation(true)
    },[])
    return(
        <>
        {
            check ?
            <></>
            :
            <Modal
            animationType="fade"
            visible={true}
            transparent={true}
            animated={true}
            >
                <View style={Styles.container}>
                    <Text style={Styles.textModal}>Verificando informações</Text>
                </View>
            </Modal>
        }
        </>
    )
}

export default Session