import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { co, ff, rf, rh } from "@/theme";

const GradientButton = ({
  title,
  color = co.white,
}: {
  title: string;
  color?: string;
}) => {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <LinearGradient
        start={[0, 0]}
        end={[0, 1]}
        colors={[color, "#0D0D0D"]}
        style={{ borderRadius: 40, padding: 1 }}
      >
        <View style={styles.circleGradient}>
          <Text style={[styles.title, { color }]}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  circleGradient: {
    backgroundColor: co.primary,
    borderRadius: 40,
    height: rh(40),
  },
  title: {
    textAlign: "center",
    color: co.white,
    fontSize: rf(16),
    fontFamily: ff.regular,
    padding: rh(10),
  },
});
