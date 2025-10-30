import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
      <View>
        <Text>Signup Screen</Text>
        <Button title="Go to Login" onPress={() => router.push("/login")} />
      </View>
    </SafeAreaView>
  );
}
