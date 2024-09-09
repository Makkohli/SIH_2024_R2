import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupPage = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

  // Register input fields and handle text change
  React.useEffect(() => {
    register('userId');
    register('firstName');
    register('lastName');
    register('email');
    register('password');
    register('districtId');
    register('subDistrictId');
    register('facilityId');
  }, [register]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://sih-backend-tgt0.onrender.com/api/v1/user/signup',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Signup successful:', response.data);
      Alert.alert('Signup Successful', 'You have successfully signed up.');
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Signup Error', 'There was an error signing up.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <View style={styles.form}>
        <Text style={styles.label}>User ID:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('userId', text)}
          value={watch('userId')}
        />
        {errors.userId && <Text style={styles.errorText}>{errors.userId.message}</Text>}
        
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('firstName', text)}
          value={watch('firstName')}
        />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName.message}</Text>}
        
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('lastName', text)}
          value={watch('lastName')}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName.message}</Text>}
        
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('email', text)}
          value={watch('email')}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('password', text)}
          value={watch('password')}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        
        <Text style={styles.label}>District ID:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('districtId', text)}
          value={watch('districtId')}
        />
        
        <Text style={styles.label}>Sub-District ID:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('subDistrictId', text)}
          value={watch('subDistrictId')}
        />
        
        <Text style={styles.label}>Facility ID:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('facilityId', text)}
          value={watch('facilityId')}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0052CC',
    borderRadius: 5,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignupPage;