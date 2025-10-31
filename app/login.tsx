import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
import App from "../firebaseConfig";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginWithFirebase = async()=>{
      try {
        
        const auth =  getAuth(App)
        const res = await  signInWithEmailAndPassword(auth,email,password)
        Alert.alert('Success',res.user.uid)
        
      } catch (error) {
        Alert.alert('Ooops','Somthing went wrong!')
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
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email or Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email or username"
            placeholderTextColor="#A2818C"
            value={email}
              onChangeText={setEmail}

          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
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

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={loginWithFirebase}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>New to ShareBite? </Text>
          <TouchableOpacity onPress={()=>router.push("/signup")}>
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
    borderWidth:1,
    borderColor:"#E6DCE0",
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
    shadowColor: "#B90C40",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
