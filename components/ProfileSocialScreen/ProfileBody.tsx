import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
    Pressable,
    Image,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GlobalStyles } from "../../constants/Styles.js";
import { FlatList } from "react-native-gesture-handler";
import React, { useState, useEffect, useContext } from "react";
import Post from "../../components/ProfileSocialScreen/Post";
// import { AuthContext } from "../../store/auth-context";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { API_BASE_URL } from "@/constants/config.js";

const TopTab = createMaterialTopTabNavigator();

function Videos({ navigation, route, refreshing }: any) {
    return (
        <View style={{ backgroundColor: GlobalStyles.colors.primary }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: typeof GlobalStyles.styles.tabBarPadding === "number" ? GlobalStyles.styles.tabBarPadding : 0,
                }}
                keyExtractor={(data, index) => index.toString()}
                data={[1, 2, 3, 4, 5, 6]}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <View style={{ margin: 10, backgroundColor: "#eee", width: 140, height: 140, justifyContent: "center", alignItems: "center" }}>
                        <Text>Video {item}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default function ProfileBody({ userId, refreshing }: any) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <TopTab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: GlobalStyles.colors.purple,
                    tabBarLabelStyle: {
                        textTransform: "none",
                        fontSize: 18,
                        padding: 0,
                        margin: 0,
                    },
                    tabBarInactiveTintColor: "rgba(0, 0, 0, 0.7)",
                    tabBarIndicatorStyle: {
                        height: 3,
                        width: "10%",
                        left: "20%",
                        borderRadius: 30,
                        backgroundColor: GlobalStyles.colors.purple,
                    },
                    tabBarStyle: {
                        padding: 0,
                        margin: 0,
                        justifyContent: "center",
                        width: "100%",
                        elevation: 0,
                        backgroundColor: "transparent",
                        borderBottomWidth: 1,
                        borderBottomColor: "rgba(255,255,255,0.1)",
                    },
                    tabBarPressColor: "white",
                }}
            >
                <TopTab.Screen
                    name="Posts"
                    options={{ title: "Images" }}
                    component={() => <View />}
                />
                <TopTab.Screen
                    name="Videos"
                    options={{ title: "VIDS" }}
                >
                    {({ navigation, route }) => (
                        <Videos
                            navigation={navigation}
                            route={route}
                            refreshing={refreshing}
                        />
                    )}
                </TopTab.Screen>
            </TopTab.Navigator>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({});
