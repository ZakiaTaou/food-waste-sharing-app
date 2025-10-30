import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function MyOfferingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My Offerings Screen</Text>
      <Button title="Go add offering" onPress={() => router.push("/add-offering")}/>
    </View>
  );
}
