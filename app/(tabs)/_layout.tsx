import React from "react";
import { Tabs } from "expo-router";

import { MyTabBar } from "@/components/TabBar";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="pay"
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
        }}
      />
      <Tabs.Screen
        name="pay"
        options={{
          title: "yolo pay",
        }}
      />
      <Tabs.Screen
        name="ginie"
        options={{
          title: "ginie",
        }}
      />
    </Tabs>
  );
}
