import {SafeAreaView, FlatList, StyleSheet, View, useWindowDimensions, TouchableOpacity, Text} from 'react-native';
import { useState, useRef } from 'react';
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';
import React from 'react';



export default function WelcomeScreen1 ({navigation}: {navigation: NativeStackNavigatorProps}) {

    return (
        <SafeAreaView style = {{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'black'
        }}>     
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})