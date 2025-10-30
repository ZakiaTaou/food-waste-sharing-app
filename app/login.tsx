import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("@/assets/logo1.png")}
          />
        </View>
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email or Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email or username"
            placeholderTextColor="#9B8C9F"
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#9B8C9F"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.eyeIcon}>
              <Ionicons name="eye-off-outline" size={22} color="#A08E9C" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>New to ShareBite? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign Up</Text>
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
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#B90C40",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 30,
    color: "#000",
  },
  inputContainer: {
    width: "90%",
    marginBottom: 18,

  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#454243",
    marginBottom: 6,

  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#000",
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
    marginRight:25
  },
  forgotPasswordText: {
    color: "#B90C40",
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#B90C40",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    width: "90%",
    marginBottom: 25,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupText: {
    color: "#A3828D",
  },
  signupLink: {
    color: "#B90C40",
    fontWeight: "600",
  },
});
