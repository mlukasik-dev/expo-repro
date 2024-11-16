import { Button, StyleSheet } from "react-native";

import { Text, View } from "react-native";
import { Stack, router } from "expo-router";

export default function TabOneScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>

        <Button
          title="Open third screen"
          onPress={() => router.push("/three")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
