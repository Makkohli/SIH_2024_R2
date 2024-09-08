<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState(null); // Store the JWT after OTP verification
  const [error, setError] = useState('');

  // Handle login form submission
  const handleLogin = async () => {
    try {
      console.log(userId);
      const response = await axios.post('/signin', { userId, password });
      if (response.status === 200) {
        setOtpRequested(true); // Switch to OTP input if login is successful
        Alert.alert('OTP has been sent to your email');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      Alert.alert('Error', error);
    }
  };

  // Handle OTP verification
  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post('/verify-otp', { userId, otp });
      if (response.status === 200) {
        setToken(response.data.token); // Store the JWT token
        Alert.alert('Success', 'Logged in successfully');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'OTP verification failed');
      Alert.alert('Error', error);
    }
  };

  return (
    <View style={styles.container}>
      {!otpRequested ? (
        <View>
          <Text style={styles.heading}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="User ID"
            value={userId}
            onChangeText={setUserId}
            autoCapitalize="none"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.heading}>Enter OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}
      {token && <Text style={styles.successText}>You are successfully logged in!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#05C168',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default LoginPage;
=======
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
>>>>>>> d719ce4fbd563387102a180b0e408ddd8849bb35
