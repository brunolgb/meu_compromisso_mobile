import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import Login_cpf from '../Login_cpf'
import Login_password from '../Login_password'
import RegisterMember_pessoal from '../RegisterMember_pessoal'

const Stack = createStackNavigator();

function RouteScreens ()
{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen
                    name="CPF"
                    component={Login_cpf}
                />
                <Stack.Screen
                    name="Password"
                    component={Login_password}
                />
                <Stack.Screen
                    name="Register_member_pessoal"
                    component={RegisterMember_pessoal}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RouteScreens;