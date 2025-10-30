import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function OfferingDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Offering Detail Screen</Text>
      <Text>Offering ID: {id}</Text>
    </View>
  );
}
