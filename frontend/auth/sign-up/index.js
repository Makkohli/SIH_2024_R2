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

export default function SignUp() {
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
        Create Account
      </Text>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 10,
        }}
      >
        Join us to get started
      </Text>

      {/* Full Name Input */}
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter your full name" />
      </View>

      {/* Email Input */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>

      {/* Create Account Button */}
      <View
        style={{
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Create Account pressed")}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* Sign-In Redirect Button */}
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => router.replace("auth/sign-in")}
        >
          <Text style={styles.createAccountButtonText}>
            Already have an account? Sign In
          </Text>
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
    alignItems: "center",
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
