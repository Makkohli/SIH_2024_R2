import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function RequestData({ route }) {
  const navigation = useNavigation();

  // Form states for health scheme related fields
  const [date, setDate] = useState('');
  const [healthSchemeName, setHealthSchemeName] = useState('');
  const [schemeCode, setSchemeCode] = useState('');
  const [beneficiaryType, setBeneficiaryType] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [beneficiaryId, setBeneficiaryId] = useState('');
  const [beneficiaryAge, setBeneficiaryAge] = useState('');
  const [beneficiaryGender, setBeneficiaryGender] = useState('');
  const [beneficiaryAddress, setBeneficiaryAddress] = useState('');

  const handleCancel = () => {
    Alert.alert('Request Cancelled');
  };

  const handleSubmit = () => {
    if (date && healthSchemeName && schemeCode && beneficiaryType && requestedDataType && specificDataRequirements) {
      Alert.alert('Request Submitted Successfully');

      // Simulating adding the new request to notifications (update the actual logic as per your requirement)
      const newRequest = {
        date,
        heading: 'Health Scheme Data Request',
        requestor: 'Me',
        scheme: healthSchemeName,
        schemeCode,
        beneficiaryType,
        beneficiaryName,
        beneficiaryId,
        beneficiaryAge,
        beneficiaryGender,
        beneficiaryAddress,
        state: 'Pending',
      };

      route.params.addNewSentRequest(newRequest);

      // Reset form
      setDate('');
      setHealthSchemeName('');
      setSchemeCode('');
      setBeneficiaryType('');
      setBeneficiaryName('');
      setBeneficiaryId('');
      setBeneficiaryAge('');
      setBeneficiaryGender('');
      setBeneficiaryAddress('');

      navigation.goBack();
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#333" size={25} />
        </TouchableOpacity>

        <Text style={styles.heading}>Submit Data</Text>

        {/* Scrollable form fields */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Enter Date"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Health Scheme Name</Text>
          <TextInput
            style={styles.input}
            value={healthSchemeName}
            onChangeText={setHealthSchemeName}
            placeholder="Enter Health Scheme Name"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Scheme Code</Text>
          <TextInput
            style={styles.input}
            value={schemeCode}
            onChangeText={setSchemeCode}
            placeholder="Enter Scheme Code"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Beneficiary Type</Text>
          <TextInput
            style={styles.input}
            value={beneficiaryType}
            onChangeText={setBeneficiaryType}
            placeholder="Enter Beneficiary Type"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Beneficiary Name</Text>
          <TextInput
            style={styles.input}
            value={beneficiaryName}
            onChangeText={setBeneficiaryName}
            placeholder="Enter Beneficiary Name"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Beneficiary ID</Text>
          <TextInput
            style={styles.input}
            value={beneficiaryId}
            onChangeText={setBeneficiaryId}
            placeholder="Enter Beneficiary ID"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Beneficiary Age</Text>
          <TextInput
            style={styles.input}
            value={beneficiaryAge}
            onChangeText={setBeneficiaryAge}
            placeholder="Enter Beneficiary Age"
            keyboardType="numeric"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Beneficiary Gender</Text>
          <TextInput
            style={styles.input}
            value={beneficiaryGender}
            onChangeText={setBeneficiaryGender}
            placeholder="Enter Beneficiary Gender"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Beneficiary Address</Text>
          <TextInput
            style={styles.input}
            value={beneficiaryAddress}
            onChangeText={setBeneficiaryAddress}
            placeholder="Enter Beneficiary Address"
            placeholderTextColor="#888"
          />
        </View>

        {/* Fixed Bottom Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the page to scroll fully
    paddingBottom: 100, // Padding to ensure the buttons are scrollable
  },
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 40, // Added space above the back button
    backgroundColor: '#f8f9fa',
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#E8E8E8", // Gray background for the back button
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Space below the back button
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: 'montregular', // Regular font for labels
    color: '#666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    fontFamily: 'montlight', // Light font for input text
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff', // White for cancel button
    borderWidth: 1,
    borderColor: '#000', // Black border
    alignItems: 'center',
    marginRight: 10,
  },
  submitButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#000', // Black for submit button
    alignItems: 'center',
    marginLeft: 10,
  },
  cancelButtonText: {
    color: '#000', // Black text for cancel button
    fontSize: 16,
    fontFamily: 'montbold',
  },
  submitButtonText: {
    color: '#fff', // White text for submit button
    fontSize: 16,
    fontFamily: 'montbold',
  },
});
