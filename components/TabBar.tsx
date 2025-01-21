import { View, ImageBackground, Image } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { co, ff, hp, rf, rh } from "@/theme";
import { icons, images } from "@/assets";

export function MyTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <ImageBackground
      source={images.tabBackground}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: hp(6),
        paddingHorizontal: hp(6.5),
        paddingBottom: hp(1.5),
      }}
    >
      <View style={{ flexDirection: "row", gap: hp(5) }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              key={index}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: "center",
                bottom: index === 1 ? hp(3.6) : hp(1.8),
              }}
            >
              <LinearGradient
                colors={[co.white, co.primary]}
                start={[0, 0]}
                end={[0, 1]}
                style={{
                  width: isFocused ? rh(51) : rh(45),
                  height: isFocused ? rh(51) : rh(45),
                  borderRadius: 100,
                  padding: 1,
                  overflow: "hidden",
                  opacity: isFocused ? 1 : 0.3,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    borderRadius: 100,
                    backgroundColor: co.primary,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={
                      label === "home"
                        ? icons.home
                        : label === "ginie"
                        ? icons.offer
                        : icons.scan
                    }
                    tintColor={co.white}
                    style={{
                      resizeMode: "contain",
                      height: isFocused ? rh(22) : rh(26),
                      width: isFocused ? rh(22) : rh(26),
                    }}
                  />
                </View>
              </LinearGradient>
              <Text
                style={{
                  color: co.white,
                  opacity: isFocused ? 1 : 0.3,
                  fontSize: rf(12),
                  fontFamily: ff.medium,
                  marginTop: 5,
                }}
              >
                {typeof label === "string" ? label : null}
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    </ImageBackground>
  );
}
