import * as React from 'react';
import {
    View,
    Text,
} from 'react-native';

import HeaderMenu from '../HeaderMenu';

import Styles from './style'

export default function Scale()
{
    return(
        <View style={Styles.container}>
            <HeaderMenu/>
            <View style={Styles.content}>
                <Text>Escala</Text>
            </View>
        </View>
    )
}