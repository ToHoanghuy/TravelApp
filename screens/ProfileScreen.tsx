import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';


export default function ProfileScreen({ navigation }: { navigation: NativeStackNavigatorProps }) {

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    
});
