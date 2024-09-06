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
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#6200EE' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Notifications */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: '#767577', true: '#6200EE' }}
          thumbColor={isNotificationsEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Data Sharing */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Data Sharing</Text>
        <Switch
          value={isDataSharingEnabled}
          onValueChange={toggleDataSharing}
          trackColor={{ false: '#767577', true: '#6200EE' }}
          thumbColor={isDataSharingEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Unit System */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Unit System</Text>
        <TouchableOpacity onPress={switchUnitSystem}>
          <Text style={[styles.unitText, { color: isDarkMode ? '#fff' : '#6200EE' }]}>{unitSystem}</Text>
        </TouchableOpacity>
      </View>

      {/* Account Settings */}
      <TouchableOpacity style={styles.accountButton}>
        <Text style={styles.accountButtonText}>Account Settings</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity style={styles.linkButton}>
        <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#6200EE' }]}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Terms of Service */}
      <TouchableOpacity style={styles.linkButton}>
        <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#6200EE' }]}>Terms of Service</Text>
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
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  settingText: {
    fontSize: 18,
  },
  unitText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountButton: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    shadowColor: '#6200EE',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  accountButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
