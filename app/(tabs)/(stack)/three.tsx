import { router } from "expo-router";
import { StyleSheet, View, Button } from "react-native";

export default function StackThreeScreen() {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
