import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import Style from './style'

function MessageErrors(props){
    const [progress, setProgress] = React.useState(0);

    const { message } = props;
    if(message != null)
    {
        setInterval(() => {
            setProgress(progress + 1)
            if(progress == 4){
                clearInterval()
            }
        }, 1000);
        return(
            <View style={Style.container}>
                <Text style={Style.message}>
                    {message}
                </Text>
                <View style={Style.progress}/>
            </View>
        );
    }
    else{
        return(
        <>
        </>
        )
    }
}

export default MessageErrors;