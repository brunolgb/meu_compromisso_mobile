import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

//components
import Login from '../../screens/Login'
import RegisterMember_pessoal from '../../screens/RegisterMember_pessoal'
import RegisterMember_address from '../../screens/RegisterMember_address'
import RegisterMember_access from '../../screens/RegisterMember_access'
import Home from '../../screens/Home'
import Scale from '../../screens/Scale'
import Profile from '../../screens/Profile'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomMenuDrop(props)
{
    return(
        <DrawerContentScrollView {...props}>
            <View style={{
                flex:1,
                alignItems:"center",
                marginBottom: 20,
                marginTop: 30,
                }}>
                <Image source={require('../../assets/logoIgrejaGreen.png')} style={{width: 100, height: 100}}/>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}
function menuDrop()
{
    return(
        <Drawer.Navigator
            drawerType="slide"
            hideStatusBar={true}
            drawerContentOptions={{
                activeBackgroundColor: "#fff",
                inactiveTintColor: "#333",
                activeTintColor: 'rgb(70,157,40)',
            }}
            drawerContent={CustomMenuDrop}
            >
            <Drawer.Screen name="Home" component={Home} options={{
                title: "Página inicial"
            }}/>
            <Drawer.Screen name="Scale" component={Scale} options={{
                title: "Escala de Louvor"
            }}/>
             <Drawer.Screen name="Profile" component={Profile} options={{
                title: "Perfil"
            }}/>
            <Drawer.Screen name="Login" component={Login} options={{
                title: "Sair"
            }}/>
        </Drawer.Navigator>
    )
}

function RouteScreens ()
{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Home">
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register_member_pessoal"
                    component={RegisterMember_pessoal}
                />
                <Stack.Screen
                    name="Register_member_address"
                    component={RegisterMember_address}
                />
                <Stack.Screen
                    name="Register_member_access"
                    component={RegisterMember_access}
                />
                <Stack.Screen
                    name="Home"
                    component={menuDrop}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default RouteScreens;