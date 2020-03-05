import * as React from 'react';
import { View, Text} from 'react-native';
import Style from './style';

function HeaderRegister(props)
{
    return(
        <View style={Style.container}>
            <View style={Style.indicator}>
                <View style={[Style.indicatorCircle, props.page == "pessoal" ? Style.indicatorCircle_actived : Style.indicatorCircle ]}>
                    <Text style={[Style.indicatorCircleNumber, props.page == "pessoal" ? Style.indicatorCircleNumber_actived : Style.indicatorCircleNumber ]}>1</Text>
                </View>
                <Text style={Style.indicatorText}>Pessoal</Text>
            </View>
            <View style={Style.indicator}>
                <View style={[Style.indicatorCircle, props.page == "address" ? Style.indicatorCircle_actived : Style.indicatorCircle ]}>
                    <Text style={[Style.indicatorCircleNumber, props.page == "address" ? Style.indicatorCircleNumber_actived : Style.indicatorCircleNumber ]}>2</Text>
                </View>
                <Text style={Style.indicatorText}>Endereço</Text>
            </View>
            <View style={Style.indicator}>
                <View style={[Style.indicatorCircle, props.page == "access" ? Style.indicatorCircle_actived : Style.indicatorCircle ]}>
                    <Text style={[Style.indicatorCircleNumber, props.page == "access" ? Style.indicatorCircleNumber_actived : Style.indicatorCircleNumber ]}>3</Text>
                </View>
                <Text style={Style.indicatorText}>Acesso</Text>
            </View>
        </View>
    );
}
export default HeaderRegister;