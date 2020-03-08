import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import HeaderMenu from '../HeaderMenu';

import Styles from './style'

export default function Home({navigation})
{
    return(
        <View style={Styles.container}>
            <HeaderMenu navigate={navigation}/>
            <View style={Styles.content}>
                <Text>Bruno</Text>
            </View>
        </View>
    )
}