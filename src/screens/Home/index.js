import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Session from '../../components/Session'
import HeaderMenu from '../HeaderMenu';
import Styles from './style'

export default function Home({route, navigation})
{
    return(
        <>
        <Session/>
        <View style={Styles.container}>
            <HeaderMenu navigate={navigation}/>
            <View style={Styles.content}>
                <Text></Text>
            </View>
        </View>
        </>
    )
}