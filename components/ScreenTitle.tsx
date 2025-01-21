import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { co, ff, rf } from "@/theme";

const ScreenTitle = ({ screenName }: { screenName: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{screenName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: co.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: co.white,
    fontSize: rf(24),
    fontFamily: ff.regular,
  },
});

export default ScreenTitle;
