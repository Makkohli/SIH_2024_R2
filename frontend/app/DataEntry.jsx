// Import necessary libraries
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function PatientForm() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // Login function to retrieve token
  const handleLogin = async () => {
    const loginData = {
      userId: userId,
      password: password,
    };

    try {
      const response = await fetch('https://sih-backend-tgt0.onrender.com/api/v1/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        const userToken = data.token;
        setToken(userToken);
        Alert.alert('Login Successful', 'Token received.');
      } else {
        Alert.alert('Login Failed', data.message || 'An error occurred.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to login.');
      console.error(error);
    }
  };

  // Function to submit the patient form
  const onSubmit = async (data) => {
    // Format the data to match the required structure
    const newData = {
      newData: {
        uid: data.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        age: parseInt(data.age, 10),
        sex: data.sex,
        startDate: data.startDate,
        endDate: data.endDate,
        status: data.status,
        description: data.description,
      }
    };

    try {
      const response = await fetch('https://sih-backend-tgt0.onrender.com/api/v1/data/', {
        method: 'POST',
        headers: {
          'authorization': `${token}`,
          'Content-Type': 'application/json' // Ensure this is set correctly
       
        },
        body: JSON.stringify(newData), // Send the properly formatted data
      });

      const responseData = await response.json();

      if (response.ok) {
        Alert.alert('Data Submitted', 'Patient data has been submitted successfully.');
      } else {
        Alert.alert('Submission Failed', responseData.message || 'An error occurred.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to submit data.');
      console.error(error);
    }

    reset(); // Reset the form after submission
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Login</Text>
      {/* User ID */}
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
      />
      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />

      {token && (
        <>
          <Text style={styles.heading}>Patient Information Form</Text>

          {/* UID */}
          <Controller
            control={control}
            name="uid"
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="UID"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.uid && <Text style={styles.error}>UID is required.</Text>}

          {/* First Name */}
          <Controller
            control={control}
            name="firstName"
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.firstName && <Text style={styles.error}>First name is required.</Text>}

          {/* Last Name */}
          <Controller
            control={control}
            name="lastName"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {/* Age */}
          <Controller
            control={control}
            name="age"
            defaultValue=""
            rules={{ required: true, min: 0 }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Age"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.age && <Text style={styles.error}>Age is required and must be 0 or more.</Text>}

          {/* Sex */}
          <Controller
            control={control}
            name="sex"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Sex"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {/* Start Date */}
          <Controller
            control={control}
            name="startDate"
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Start Date (YYYY-MM-DD)"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.startDate && <Text style={styles.error}>Start date is required.</Text>}

          {/* End Date */}
          <Controller
            control={control}
            name="endDate"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="End Date (YYYY-MM-DD)"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          {/* Status */}
          <Controller
            control={control}
            name="status"
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Status (e.g., active, cured, dead)"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.status && <Text style={styles.error}>Status is required.</Text>}

          {/* Description */}
          <Controller
            control={control}
            name="description"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Description"
                multiline
                numberOfLines={4}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
