import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation'
import WelcomeScreen1 from '@/screens/WelcomeScreen/WelcomeScreen1'
import { UserProvider } from '@/context/UserContext'
import LoginScreen from '@/screens/WelcomeScreen/LoginScreen'
import RegisterScreen from '@/screens/WelcomeScreen/RegisterScreen'
import RegisterScreen2 from '@/screens/WelcomeScreen/RegisterScreen2'
import MainScreen from '@/screens/MainScreen'
import NotificationsScreen from '@/screens/NotificationsScreen'
import PersonalInformationScreen from '@/screens/PersonalInformationScreen'
import VoucherScreen from '@/screens/VoucherScreen'
import AddNewCollectionScreen from '@/screens/AddNewCollectionScreen'
import DetailScreen from '@/screens/HomeScreen/DetailScreen'
(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.style = { fontFamily: 'UTMTimesBold' };

import React from 'react'
import AvailableRoomScreen from '@/screens/AvailableRoomScreen'
import ChatScreen from '@/screens/ChatScreen'
import ChatBoardScreen from '@/screens/ChatBoardScreen'
import LuckyWheelScreen from '@/screens/LuckyWheelScreen'
import SearchLocationScreen from '@/screens/SearchLocationScreen'
import ViewMapScreen from '@/screens/ViewMapScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (

    <NavigationContainer >
      <UserProvider>
        <Stack.Navigator
          initialRouteName='login'>
          <Stack.Screen
            name="welcome1"
            component={WelcomeScreen1}
            options={{
              headerShown: false,
              headerTransparent: true,
            }} />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="register"
            component={RegisterScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="register2"
            component={RegisterScreen2}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name="main-screen"
            component={MainScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="notifications-screen"
            component={NotificationsScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="personal-information-screen"
            component={PersonalInformationScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="voucher-screen"
            component={VoucherScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="add-new-collection-screen"
            component={AddNewCollectionScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='detail-screen'
            component={DetailScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name="available-room-screen"
            component={AvailableRoomScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name="chat-board-screen"
            component={ChatBoardScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name="chat-screen"
            component={ChatScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name='lucky-wheel-screen'
            component={LuckyWheelScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name='search-location-screen'
            component={SearchLocationScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name='view-map-screen'
            component={ViewMapScreen}
            options={{
              headerShown: false
            }} />

        </Stack.Navigator>
      </UserProvider>

    </NavigationContainer>


  );
}