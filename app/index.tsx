import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'
import WelcomeScreen1 from '@/screens/WelcomeScreen/WelcomeScreen1'
import { UserProvider } from '@/context/UserContext'
import LoginScreen from '@/screens/WelcomeScreen/LoginScreen'
import RegisterScreen from '@/screens/WelcomeScreen/RegisterScreen'
import RegisterScreen2 from '@/screens/WelcomeScreen/RegisterScreen2'
import MainScreen from '@/screens/MainScreen'
(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.style = { fontFamily: 'UTMTimesBold'};

import React from 'react'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    
      <NavigationContainer >
        <UserProvider>
        <Stack.Navigator
            initialRouteName='login'>
                <Stack.Screen 
                name = "welcome1" 
                component={WelcomeScreen1}
                options={{
                headerShown: false,
                headerTransparent:true,
                }}/>
                <Stack.Screen 
                name = "login" 
                component={LoginScreen}
                options={{
                headerShown: false
                }}/>
                <Stack.Screen 
                name = "register" 
                component={RegisterScreen}
                options={{
                headerShown: false
                }}/>
                <Stack.Screen 
                name = "register2" 
                component={RegisterScreen2}
                options={{
                headerShown: false
                }}/>

            <Stack.Screen 
                name = "main-screen"
                component={MainScreen}
                options={{
                headerShown: false
                }}/>

            </Stack.Navigator>
        </UserProvider>
            
      </NavigationContainer>
    
   
  );
}