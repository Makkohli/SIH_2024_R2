import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignIn() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 25,
        marginTop: 20,
        height: "100%", // Ensure height is in quotes
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          marginTop: 10,
        }}
      >
        Let's Sign You In
      </Text>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        Welcome Back
      </Text>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        You've been missed!
      </Text>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true} // To hide the password text
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Sign-In pressed")}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => router.replace("auth/sign-up")}
        >
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#05C168", // Green button
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center", // Center the button text
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  createAccountButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#05C168", // Green border
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
  },
  createAccountButtonText: {
    color: "#05C168", // Green text
    fontWeight: "bold",
    fontSize: 16,
  },
});
