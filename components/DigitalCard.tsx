import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { co, ff, rf, rh, rs, SCREEN_WIDTH } from "@/theme";
import { icons, images } from "@/assets";

const CARD_WIDTH = SCREEN_WIDTH * 0.6 - rs(32); // 60% of screen width
const CARD_HEIGHT = (CARD_WIDTH / 186) * 296; // Maintain aspect ratio

const DigitalCard = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const opacity = useSharedValue(1);
  const iceOpacity = useSharedValue(0);

  // Toggle freeze/unfreeze
  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
    if (isFrozen) {
      // Unfreeze
      opacity.value = withTiming(1, { duration: 500 });
      iceOpacity.value = withTiming(0, { duration: 500 });
    } else {
      // Freeze
      opacity.value = withTiming(0, { duration: 500 });
      iceOpacity.value = withTiming(1, { duration: 500 });
    }
  };

  // Animated styles
  const imageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const iceStyle = useAnimatedStyle(() => ({
    opacity: iceOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>your digital debit card</Text>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={images.debitCard}
            style={[styles.image, imageStyle]}
          />
          <Animated.Image
            source={images.cardFreeze}
            style={[styles.iceLayer, iceStyle]}
          />
        </View>
        <Pressable
          onPress={toggleFreeze}
          style={{
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            colors={[isFrozen ? co.red : co.white, co.primary]}
            start={[0, 0]}
            end={[0, 1]}
            style={styles.freezeButtonContainer}
          >
            <View style={styles.freezeButtonInner}>
              <Image
                source={icons.snowflake}
                tintColor={isFrozen ? co.red : co.white}
                style={styles.freezeIcon}
              />
            </View>
          </LinearGradient>
          <Text
            style={[
              styles.freezeButtonText,
              { color: isFrozen ? co.red : co.white },
            ]}
          >
            {isFrozen ? "unfreeze" : "freeze"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: rh(48),
  },
  titleText: {
    color: co.white,
    fontSize: rf(12),
    fontFamily: ff.medium,
    textTransform: "uppercase",
    opacity: 0.2,
  },
  cardContainer: {
    flexDirection: "row",
    gap: rs(12),
    marginTop: rh(16),
  },
  imageContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  iceLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  freezeButtonContainer: {
    width: rh(55),
    height: rh(55),
    borderRadius: 100,
    padding: 1,
    overflow: "hidden",
  },
  freezeButtonInner: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: co.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  freezeIcon: {
    resizeMode: "contain",
    height: rh(26),
    width: rh(26),
  },
  freezeButtonText: {
    fontSize: rf(15),
    marginTop: rh(5),
  },
});

export default DigitalCard;
