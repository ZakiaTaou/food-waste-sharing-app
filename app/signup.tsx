import App from "@/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signUpWithFirBase = async ()=> {
    try {
      const auth = getAuth(App);
      await createUserWithEmailAndPassword(auth,email,password);
      
      Alert.alert('Success','Your account has been created successfully')
      
    } catch (error) {
      console.log(error)
      
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("@/assets/logo1.jpeg")}
        />
      </View>
      <Text style={styles.title}>Welcome to the Community!</Text>
      <Text style={styles.subTitle}>
        Create you account to start sharing and reducing waste.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.passwordContainer}>
          <Ionicons
            name="person-outline"
            size={22}
            color="#A2818C"
            style={styles.mailIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#A2818C"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.passwordContainer}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#A2818C"
            style={styles.mailIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email or username"
            placeholderTextColor="#A2818C"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.passwordContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#A2818C"
            style={styles.mailIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#A2818C"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.eyeIcon}>
            <Ionicons name="eye-off-outline" size={22} color="#A2818C" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={signUpWithFirBase}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.loginLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F5F6",
  },
  logoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000",
    width: "80%",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    marginBottom: 25,
    width: "80%",
    textAlign: "center",
    fontWeight: "500",
    color: "#A2818C",
    marginTop: 10,
  },
  inputContainer: {
    width: "90%",
    marginBottom: 18,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6DCE0",
    borderRadius: 25,
    paddingHorizontal: 50,
    paddingVertical: 14,
    fontSize: 15,
    color: "#000",
  },
  mailIcon: {
    position: "absolute",
    left: 16,
    top: 11,
    zIndex: 10,
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 25,
    marginRight: 25,
  },
  forgotPasswordText: {
    color: "#B90C40",
    fontWeight: "500",
  },
  signupButton: {
    backgroundColor: "#B90C40",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "90%",
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
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    color: "#A3828D",
  },
  loginLink: {
    color: "#B90C40",
    fontWeight: "600",
  },
});
