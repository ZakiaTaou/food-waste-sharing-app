import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#F8F5F6"
      }}
    >
      <Text style={styles.title}>ShareBite</Text>
      <Text style={styles.subTitle}>Share more, waste less</Text>
      <Image
        style={{ width: 250, height: 250 }}
        source={require("@/assets/logo1.jpeg")}
      />
      <Text style={styles.txtJoin}>Join Our Community</Text>
      <TouchableOpacity style={styles.buttonSU} onPress={() => router.push("/signup")}>
        <Text style={styles.txtSignup}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSI} onPress={() => router.push("/login")}>
        <Text style={styles.txtSignin}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "#B90C40",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 3,
  },
  subTitle: {
    fontSize: 15,
    marginBottom: 25,
    fontWeight: "500",
  },
  txtJoin: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 25,
    marginBottom: 55,
  },
  buttonSU: {
    backgroundColor: "#B90C40",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 60,
    borderRadius: 25,
    marginBottom: 35,
    shadowColor: "#B90C40",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtSignup: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonSI: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 60,
    borderRadius: 25,
    marginBottom: 25,
    shadowColor: "#B90C40",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtSignin: {
    color: "#B90C40",
    fontSize: 20,
    fontWeight: "700",
  },
});
