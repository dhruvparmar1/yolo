import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { co } from "@/theme";

const ScreenWrapper = ({
  children,
  containerStyle,
}: {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
}) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;
  return (
    <View
      style={[
        { flex: 1, paddingTop, backgroundColor: co.primary },
        containerStyle,
      ]}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
