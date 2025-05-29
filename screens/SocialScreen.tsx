import * as React from "react";
import { View, StyleSheet } from "react-native";
import Body from "../components/home/body/Body";
import FloatingButton from "../components/home/FloatingButton";
import { GlobalStyles } from "../constants/Styles.js";
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { CONTAINER_HEIGHT } from "../components/home/head/Stories";

export default function SocialScreen({ navigation }: {navigation: NativeStackNavigatorProps}) {
  const [followings, setFollowings] = React.useState({ data: [], list: [] });
  const [headerHeight, setHeaderHeight] = React.useState(50);

  const StoryTranslate = useSharedValue(false);

  const storyAnimatedStyles = useAnimatedStyle(() => {
    return {
      marginTop: StoryTranslate.value ? withTiming(-CONTAINER_HEIGHT) : withTiming(0),
      opacity: StoryTranslate.value ? withTiming(0) : withTiming(1),
    };
  });

  const storySvgAnimatedStyles = useAnimatedStyle(() => {
    return {
      position: "absolute",
      transform: [
        {
          translateY: StoryTranslate.value
            ? withTiming(-CONTAINER_HEIGHT)
            : withTiming(0),
        },
      ],
    };
  });

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
      <Animated.View style={storyAnimatedStyles}>
        <Body StoryTranslate={{ value: false }} />
      </Animated.View>
      <Animated.View style={storySvgAnimatedStyles}>
      </Animated.View>
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
