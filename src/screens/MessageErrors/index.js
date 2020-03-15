import * as React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Style from './style'

function MessageErrors(props){
    const { message } = props;
    return(
        <View style={Style.container}>
            <Text style={Style.message}>
                {message}
            </Text>
            <View style={Style.progress}/>
        </View>
    );
}

export default MessageErrors;