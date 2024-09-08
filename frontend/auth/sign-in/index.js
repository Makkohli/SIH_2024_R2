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
