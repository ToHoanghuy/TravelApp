import { View, Text, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.style = { fontFamily: 'UTMTimesBold' };

import WelcomeScreen1 from '@/screens/WelcomeScreen/WelcomeScreen1'
import LoginScreen from '@/screens/WelcomeScreen/LoginScreen'
import RegisterScreen from '@/screens/WelcomeScreen/RegisterScreen'
import MainScreen from '@/screens/MainScreen'
import React from 'react'
import RegisterScreen2 from '@/screens/WelcomeScreen/RegisterScreen2'
import AddNewCollectionScreen from '@/screens/AddNewCollectionScreen'
import CollectionScreen from '@/screens/CollectionScreen'
import PersonalInformationScreen from '@/screens/PersonalInformationScreen'
import NotificationsScreen from '@/screens/NotificationsScreen'
import ChatBoardScreen from '@/screens/ChatBoardScreen'
import ChatScreen from '@/screens/ChatScreen'
import PaymentMethodScreen from '@/screens/PaymentMethodScreen'
import AddNewPaymentMethodScreen from '@/screens/AddNewPaymentMethodScreen'
import ReservationRequiredScreen from '@/screens/ReservationRequiredScreen'
import AvailableRoomScreen from '@/screens/AvailableRoomScreen'
import DetailScreen1 from '@/screens/HomeScreen/DetailScreen1'
import DetailScreen from '@/screens/HomeScreen/DetailScreen'
import { UserProvider } from '@/context/UserContext'
import { RootStackParamList } from '@/types/navigation'
import DetailBookingScreen from '@/screens/DetailBookingScreen';
import TicketScreen from '@/screens/TicketScreen';
import LuckyWheelScreen from '@/screens/LuckyWheelScreen';
import SearchLocationScreen from '@/screens/SearchLocationScreen';
import ProfileSocialScreen from '@/screens/ProfileSocialScreen';
import SearchFriendScreen from '@/screens/SearchFriendScreen';
import NotificationsSocialScreen from '@/screens/NotificationsSocialScreen';
import NewPostScreen from '@/screens/NewPostScreen';
import ViewMapScreen from '@/screens/ViewMapScreen';
import VoucherScreen from '@/screens/VoucherScreen';
import SocialScreen from '@/screens/SocialScreen';
import PostDetailScreen from '@/screens/PostDetailScreen';
import FriendsListScreen from '@/screens/FriendsListScreen';

LogBox.ignoreLogs([
  'Encountered two children with the same key',
  'Text strings must be rendered within a <Text> component.',
  'A props object containing a "key" prop is being spread into JSX'
]);

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (

    <NavigationContainer>
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
            name="collection-screen"
            component={CollectionScreen}
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
            name="personal-information-screen"
            component={PersonalInformationScreen}
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
            name="main-screen"
            component={MainScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name="payment-method-screen"
            component={PaymentMethodScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name="add-new-payment-method-screen"
            component={AddNewPaymentMethodScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name="reservation-required-screen"
            component={ReservationRequiredScreen}
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
            name='detail-screen'
            component={DetailScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name="detail-booking-screen"
            component={DetailBookingScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name='booking-screen'
            component={TicketScreen}
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
            name='profile-social-screen'
            component={ProfileSocialScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='search-friend-screen'
            component={SearchFriendScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name='notifications-social-screen'
            component={NotificationsSocialScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name='new-post-screen'
            component={NewPostScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='view-map-screen'
            component={ViewMapScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='voucher-screen'
            component={VoucherScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen
            name='post-detail-screen'
            component={PostDetailScreen}
            options={{
              headerShown: false
            }} />

          <Stack.Screen
            name='friends-list-screen'
            component={FriendsListScreen}
            options={{
              headerShown: false
            }} />

        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>


  );
}