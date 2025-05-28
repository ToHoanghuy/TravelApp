import * as React from "react";
import { View, StyleSheet } from "react-native";
import Body from "../components/home/body/Body";
import FloatingButton from "../components/home/FloatingButton";
import { GlobalStyles } from "../constants/Styles.js";
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';

export default function SocialScreen({ navigation }: {navigation: NativeStackNavigatorProps}) {
  const [followings, setFollowings] = React.useState({ data: [], list: [] });
  const [headerHeight, setHeaderHeight] = React.useState(50);

  return (
    <View style={styles.container}>
      <View>
        <View
          onLayout={(event) => {
            setHeaderHeight(event.nativeEvent.layout.height);
          }}
        >
        </View>
      </View>
      <Body StoryTranslate={{ value: false }} />
      <FloatingButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
  },
});
