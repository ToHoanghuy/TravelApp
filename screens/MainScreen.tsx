import {Image,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import TicketScreen from "@/screens/TicketScreen";
import CollectionScreen from "@/screens/CollectionScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import React from 'react';
import SocialScreen from './SocialScreen';

const Tab = createBottomTabNavigator()

export default function MainScreen() {
  return (
    
      <Tab.Navigator 
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.itemStyle,
        headerShown: false
      }}>
        <Tab.Screen 
        name="Trang chủ" 
        component={HomeScreen}
        options={{ 
          tabBarIcon: ({ focused }: any) => (
            <Image 
              source={require('../assets/icons/home.png')} 
              style={{ tintColor: focused ? "blue" : "gray", width: 22, height: 22 }} 
            />
          )
        }}
      />
        <Tab.Screen 
        name="Booking" 
        component={TicketScreen}
        options={{ 
          tabBarIcon: ({ focused }: any) => (
            <Image 
              source={require('../assets/icons/ticket.png')} 
              style={{ tintColor: focused ? "blue" : "gray", width: 22, height: 22 }} 
            />
          )
        }}
      />
              <Tab.Screen 
        name="Khám phá" 
        component={SocialScreen}
        options={{ 
          tabBarIcon: ({ focused }: any) => (
            <Image 
              source={require('../assets/icons/Profile.png')} 
              style={{ tintColor: focused ? "blue" : "gray", width: 22, height: 22 }} 
            />
          ),
          headerShown:false,

        }}
      /> 
        <Tab.Screen 
        name="Yêu thích" 
        component={CollectionScreen}
        options={{ 
          tabBarIcon: ({ focused }: any) => (
            <Image 
              source={require('../assets/icons/collection.png')} 
              style={{ tintColor: focused ? "blue" : "gray", width: 22, height: 22 }} 
            />
          ),
          //tabBarLabel: () => null,
          headerShown: false,
        }}
      />
        <Tab.Screen 
        name="Trang cá nhân" 
        component={ProfileScreen}
        options={{ 
          tabBarIcon: ({ focused }: any) => (
            <Image 
              source={require('../assets/icons/Profile.png')} 
              style={{ tintColor: focused ? "blue" : "gray", width: 22, height: 22 }} 
            />
          ),
          headerShown:false,

        }}
      />      
      </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    height: "10%",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.7,
  shadowRadius: 16,
  elevation: 24,
  //marginBottom: 100
  },

  itemStyle: {
    marginBottom: 5
  }
})