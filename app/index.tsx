import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'
import WelcomeScreen1 from '@/screens/WelcomeScreen/WelcomeScreen1'
import { UserProvider } from '@/context/UserContext'

(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.style = { fontFamily: 'UTMTimesBold'};

import React from 'react'



const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    
      <NavigationContainer >
        <UserProvider>
        <Stack.Navigator
            initialRouteName='welcome1'>
                <Stack.Screen 
                name = "welcome1" 
                component={WelcomeScreen1}
                options={{
                headerShown: false,
                headerTransparent:true,
                }}/>

            </Stack.Navigator>
        </UserProvider>
            
      </NavigationContainer>
    
   
  );
}