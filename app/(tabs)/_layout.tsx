import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const unstable_settings = {
  initialRouteName: "(stack)",
};

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} {...props} />;
}

export default function TabLayout() {
  const color = "black";

  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot />
      <TabList
        style={{
          bottom: insets.bottom || 20,
          paddingHorizontal: insets.bottom || 20,
        }}
      >
        <TabTrigger name="index" href="/" asChild>
          <TouchableOpacity>
            <TabBarIcon name="code" color={color} />
          </TouchableOpacity>
        </TabTrigger>
        <TabTrigger name="two" href="/two">
          <TouchableOpacity>
            <TabBarIcon name="code" color={color} />
          </TouchableOpacity>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
