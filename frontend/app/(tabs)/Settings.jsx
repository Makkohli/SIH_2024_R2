import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDataSharingEnabled, setIsDataSharingEnabled] = useState(false);
  const [unitSystem, setUnitSystem] = useState('Metric');

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
    // Implement theme switching logic here
  };

  const toggleNotifications = () => {
    setIsNotificationsEnabled(previousState => !previousState);
  };

  const toggleDataSharing = () => {
    setIsDataSharingEnabled(previousState => !previousState);
  };

  const switchUnitSystem = () => {
    setUnitSystem(previousUnit => (previousUnit === 'Metric' ? 'Imperial' : 'Metric'));
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f8f9fa' }]}>
      <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#333' }]}>Settings</Text>

      {/* Dark Mode */}
      <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#4895EF' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Notifications */}
      <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#767577', true: '#4895EF' }}
          thumbColor={isNotificationsEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Data Sharing */}
      <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Data Sharing</Text>
        <Switch
          value={isDataSharingEnabled}
          onValueChange={toggleDataSharing}
          trackColor={{ false: '#767577', true: '#4895EF' }}
          thumbColor={isDataSharingEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Unit System */}
      <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Unit System</Text>
        <TouchableOpacity onPress={switchUnitSystem}>
          <Text style={[styles.unitText, { color: isDarkMode ? '#fff' : '#000000' }]}>{unitSystem}</Text>
        </TouchableOpacity>
      </View>

      {/* Account Settings */}
      <TouchableOpacity
        style={[styles.accountButton, { backgroundColor: isDarkMode ? '#000' : '#000', borderColor: isDarkMode ? '#fff' : '#000' }]}
      >
        <Text style={[styles.accountButtonText, { color: isDarkMode ? '#fff' : '#fff' }]}>
          Account Settings
        </Text>
      </TouchableOpacity>

      {/* Log Out */}
      <TouchableOpacity style={styles.linkButton}>
        <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#000000' }]}>Log Out</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity style={styles.linkButton}>
        <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#000000' }]}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Terms of Service */}
      <TouchableOpacity style={styles.linkButton}>
        <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#000000' }]}>Terms of Service</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 55,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  settingText: {
    fontSize: 18,
    fontFamily: 'montregular', // Regular font for the setting labels
  },
  unitText: {
    fontSize: 18,
    fontFamily: 'montbold', // Bold font for the unit system text
  },
  accountButton: {
    marginTop: 5,
    paddingVertical: 15,
    borderRadius: 10, 
    borderWidth: 1, // Border added for better contrast between dark/light modes
    alignItems: 'center',
  },
  accountButtonText: {
    fontSize: 18,
    fontFamily: 'montbold', // Bold font for button text
  },
  linkButton: {
    marginTop: 5,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'montlight', // Light font for the links
    textDecorationLine: 'underline',
  },
});
