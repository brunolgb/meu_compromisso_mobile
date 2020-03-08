import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//components
import Login from '../Login'
import RegisterMember_pessoal from '../RegisterMember_pessoal'
import RegisterMember_address from '../RegisterMember_address'
import RegisterMember_access from '../RegisterMember_access'
import Home from '../Home'
import Scale from '../Scale'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function menuDrop()
{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} options={{
                title: "Página inicial"
            }}/>
            <Drawer.Screen name="Scale" component={Scale} options={{
                title: "Escala de Louvor"
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