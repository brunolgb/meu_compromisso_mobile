import * as React from 'react';
import {
    View,
    Text
} from 'react-native';

function MessageErrors(props){
    const { message } = props;
    return(
        <View>
            <Text>
                {message};
            </Text>
        </View>
    );
}

export default MessageErrors;