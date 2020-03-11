import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import HeaderMenu from '../HeaderMenu';
import Styles from './style'
import s from '../../database/syncDatabase';

export default function Home({navigation})
{
    const r = s();
    console.log(r.message)
    return(
        <View style={Styles.container}>
            <HeaderMenu navigate={navigation}/>
            <View style={Styles.content}>
                <Text></Text>
            </View>
        </View>
    )
}