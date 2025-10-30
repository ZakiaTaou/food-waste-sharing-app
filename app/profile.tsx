import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button title="Go my Offerings" onPress={() => router.push("/my-offerings")} />
      
    </View>
  );
}
