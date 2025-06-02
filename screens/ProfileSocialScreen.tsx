import { useState, useEffect, useRef, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ProfileHead from "../components/ProfileSocialScreen/ProfileHead";
import ProfileBody from "../components/ProfileSocialScreen/ProfileBody";

import { AuthContext } from "../store/auth-context.js";
import { GlobalStyles } from "../constants/Styles.js";

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ProfileSocialScreen({ navigation, route }: any) {
  
  return (
    <View style={styles.container}>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
  },
});

export default ProfileSocialScreen;