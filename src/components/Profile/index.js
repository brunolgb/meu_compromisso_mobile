import * as React from 'react';
import {
    View,
    Text,
} from 'react-native';

import HeaderMenu from '../HeaderMenu';

import Styles from './style'

export default function Profile({navigation})
{
    return(
        <View style={Styles.container}>
            <HeaderMenu navigate={navigation}/>
            <View style={Styles.content}>
                <Text>Perfil</Text>
            </View>
        </View>
    )
}