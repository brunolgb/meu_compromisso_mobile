import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import Login_cpf from '../Login_cpf'
import Login_password from '../Login_password'
import RegisterMember_pessoal from '../RegisterMember_pessoal'

const Stack = createStackNavigator();

function Login ()
{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="CPF"
                    component={Login_cpf}
                    options={{
                        title: "",
                        headerStyle: {
                            backgroundColor: 'rgb(70,157,40)',
                            height: 0
                        }
                    }}
                />
                <Stack.Screen
                    name="Password"
                    component={Login_password}
                    options={{
                        title: "Voltar",
                        headerStyle:{
                            backgroundColor: 'rgb(70,157,40)',
                        },
                        headerTitleStyle:{
                            color: "#fff",
                            fontSize: 16,
                        },
                        headerTintColor: "#fff"
                    }}
                />
                <Stack.Screen
                    name="Register_member_pessoal"
                    component={RegisterMember_pessoal}
                    options={{
                        title: "",
                        headerStyle:{
                            backgroundColor: 'rgb(70,157,40)',
                            height: 0,
                        },
                        headerTitleStyle:{
                            color: "#fff",
                            fontSize: 16,
                        },
                        headerTintColor: 'rgb(70,157,40)',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Login;