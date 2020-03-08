import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import Styles from './style'

export default function HeaderMenu(props)
{    
    return(
        <View style={Styles.nav}>
            <View style={[Styles.navChildrenPattern, Styles.btnMenu]}>
                <TouchableOpacity style={Styles.btnHeaders} onPress={() => {
                    props.navigate.openDrawer()
                }}>
                    <Image source={require("../../assets/menu.png")} style={Styles.iconMenu}/>
                </TouchableOpacity>
            </View>
            <View style={[Styles.navChildrenPattern, Styles.imageLogo]}>
                <Image source={require("../../assets/logoIgreja.png")} style={Styles.iconLogo}/>
            </View>
            <View style={[Styles.navChildrenPattern, Styles.profile]}>
                <TouchableOpacity style={Styles.btnHeaders}>
                    <Image source={require("../../assets/image-user-larger.png")} style={Styles.iconProfile}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}