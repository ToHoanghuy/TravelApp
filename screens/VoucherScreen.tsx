import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function VoucherScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 50, marginLeft: 20}}>Voucher</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});



