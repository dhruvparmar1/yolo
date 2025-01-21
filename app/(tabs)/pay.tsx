import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { DigitalCard, GradientButton, ScreenWrapper } from "@/components";
import { co, ff, rf, rh, rs } from "@/theme";

const Pay = () => {
  return (
    <ScreenWrapper>
      <ScrollView style={{ paddingHorizontal: rs(16) }} bounces={false}>
        <Text style={styles.title}>select payment mode</Text>
        <Text style={styles.description}>
          choose your preferred payment method to make payment.
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: rs(8),
            marginTop: rh(24),
            width: "60%",
          }}
        >
          <GradientButton title="pay" />
          <GradientButton title="card" color="red" />
        </View>

        <DigitalCard />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Pay;

const styles = StyleSheet.create({
  title: {
    color: co.white,
    fontSize: rf(24),
    fontFamily: ff.semiBold,
    marginTop: rh(8),
  },
  description: {
    color: co.white,
    fontSize: rf(14),
    fontFamily: ff.regular,
    opacity: 0.5,
    marginTop: rh(16),
  },
});
