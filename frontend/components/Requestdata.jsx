import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RequestData({ route }) {
  const navigation = useNavigation();

  // Form states
  const [date, setDate] = useState('');
  const [requesteeName, setRequesteeName] = useState('');
  const [designation, setDesignation] = useState('');
  const [requesteeId, setRequesteeId] = useState('');
  const [organization, setOrganization] = useState('');
  const [dataRequested, setDataRequested] = useState('');

  const handleCancel = () => {
    Alert.alert('Request Cancelled');
  };

  const handleSubmit = () => {
    if (date && requesteeName && designation && requesteeId && organization && dataRequested) {
      Alert.alert('Request Submitted Successfully');

      // Here we would typically update the Sent requests tab in the Notifications page
      const newRequest = {
        date,
        heading: 'Data Request',
        requestor: 'Me',
        designation,
        organization,
        type: dataRequested,
        state: 'Pending',
      };

      // Navigate back to Notifications page, passing new request data (if you're using navigation and state management)
      route.params.addNewSentRequest(newRequest);

      // Reset form
      setDate('');
      setRequesteeName('');
      setDesignation('');
      setRequesteeId('');
      setOrganization('');
      setDataRequested('');

      navigation.goBack(); // Navigate back to previous screen (Notifications)
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Request Data</Text>
      </View>

      {/* Scrollable form fields */}
      <ScrollView contentContainerStyle={styles.scrollView}>
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
          <Text style={styles.label}>Requestee Name</Text>
          <TextInput
            style={styles.input}
            value={requesteeName}
            onChangeText={setRequesteeName}
            placeholder="Enter Requestee Name"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Designation</Text>
          <TextInput
            style={styles.input}
            value={designation}
            onChangeText={setDesignation}
            placeholder="Enter Designation"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Requestee ID</Text>
          <TextInput
            style={styles.input}
            value={requesteeId}
            onChangeText={setRequesteeId}
            placeholder="Enter Requestee ID"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Organization</Text>
          <TextInput
            style={styles.input}
            value={organization}
            onChangeText={setOrganization}
            placeholder="Enter Organization"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data Requested</Text>
          <TextInput
            style={styles.input}
            value={dataRequested}
            onChangeText={setDataRequested}
            placeholder="Enter Data Requested"
            placeholderTextColor="#888"
          />
        </View>
      </ScrollView>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    zIndex: 1, // Ensures the header stays above the form
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    color: '#333',
    textAlign: 'left',
    marginBottom:5,
    marginTop:20,
  },
  scrollView: {
    padding: 20,
    paddingTop: 100, // Ensure form starts below the header
    paddingBottom: 80, // Give space for buttons at the bottom
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f8f9fa',
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
