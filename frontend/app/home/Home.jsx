import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react'; // Add useState import
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: '100%' }}>
          {/* Top section for HealthX logo and right side icons */}
          <View style={{
            backgroundColor: 'black',
            padding: 10,
            paddingTop: 30,
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between', // Align items in the same row
            alignItems: 'center', // Center items vertically
          }}>
            {/* HealthX Logo */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{
                fontSize: 42,
                color: 'white',
                fontFamily: 'montbold',
              }}>
                Health
              </Text>
              <Text style={{
                fontSize: 42,
                color: 'white',
                fontFamily: 'montbold',
              }}>
                X
              </Text>
            </View>

            {/* Right section - Search, Notifications, Profile */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight:10}}>
              <TouchableOpacity onPress={() => {/* Search function */ }}>
                <Ionicons name="search-outline" size={28} color="white" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications-outline" size={28} color="white" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {/* Profile logic here */ }}>
                <Ionicons name="person-circle-outline" size={28} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Black background for the menu bar and search */}
          <View style={{
            backgroundColor: 'black',
            padding: 15,
            paddingTop: 55,
            height: '15%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: '100%',
            position: 'absolute',
            top: 40, // Place below the logo
            left: 0,
            right: 0,
            zIndex: 0,
          }}>
          </View>

          {/* Content below the black section */}
          <View style={{ marginTop: '35%', paddingHorizontal: 20 }}>

            {/* Banner Image */}
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              <Image
                source={require('./../../assets/images/banner1.png')}
                style={{
                  width: '100%', // Adjust the width as needed
                  height: 200, // Adjust the height as needed
                  borderRadius: 15,
                }}
              />
            </View>

            {/* WhatsApp Banner */}
            <View style={styles.whatsappBanner}>
              <Ionicons name="logo-whatsapp" size={50} color="#25D366" />
              <Text style={styles.whatsappText}>Join our WhatsApp</Text>
            </View>

            {/* Activities Section with Three Buttons */}
            <View style={{ marginTop: 30 }}>
              <Text style={{
                fontFamily: 'montbold',
                fontSize: 22,
                color: 'black', // Adjusted from #0052CC to white for readability
                marginBottom: 15,
                marginLeft: 15,
              }}>
                Activities
              </Text>

              <View style={{ marginBottom: 15 }}>
                <TouchableOpacity
                  style={styles.activityButton}
                  onPress={() => navigation.navigate('FillData')}
                >
                  <Ionicons name="create-outline" size={24} color="white" style={{ marginRight: 10 }} />
                  <Text style={styles.activityButtonText}>Submit Data</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.activityButton}
                  onPress={() => navigation.navigate('Analyze')}
                >
                  <Ionicons name="analytics-outline" size={24} color="white" style={{ marginRight: 10 }} />
                  <Text style={styles.activityButtonText}>Analyze</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.activityButton}
                  onPress={() => navigation.navigate('RequestData')}
                >
                  <Ionicons name="document-text-outline" size={24} color="white" style={{ marginRight: 10 }} />
                  <Text style={styles.activityButtonText}>Request Data</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Banner Image */}
            <View style={{ marginTop: 30, alignItems: 'center' }}>
              <Image
                source={require('./../../assets/images/banner3.png')}
                style={{
                  width: '100%', // Adjust the width as needed
                  height: 200, // Adjust the height as needed
                  borderRadius: 15,
                }}
              />
            </View>

            {/* Covid 19 Info Card */}
            <View style={{
              backgroundColor: '#E3FFF2',
              borderRadius: 15,
              padding: 20,
              elevation: 5,
              marginTop: 20,
              marginBottom: 10
            }}>
              <Text style={{
                fontFamily: 'montbold',
                fontSize: 20,
                color: 'black', // Adjusted from #0052CC to white for readability
                marginBottom: 10,
              }}>
                COVID-19 Information
              </Text>

              <Text style={{
                fontFamily: 'montbold',
                fontSize: 16,
                color: 'black', // Adjusted from #0052CC to white for readability
              }}>
                States: Example State 1, Example State 2
              </Text>
              <Text style={{
                fontSize: 14,
                color: 'black', // Adjusted from #0052CC to white for readability
                marginTop: 10,
              }}>
                Total Cases: 1,000,000
              </Text>
              <Text style={{
                fontSize: 14,
                color: 'black', // Adjusted from #0052CC to white for readability
              }}>
                Total Deaths: 50,000
              </Text>
            </View>

          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  dropdownItemText: {
    fontSize: 16,
    color: 'black', // Adjusted from #0052CC to black
  },
  activityButton: {
    backgroundColor: 'black', // Adjusted from #0052CC to black
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityButtonText: {
    color: 'white',
    fontFamily: 'montbold',
    fontSize: 16,
  },
  whatsappBanner: {
    backgroundColor: '#E3FFF2',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  whatsappText: {
    fontFamily: 'montbold',
    fontSize: 18,
    color: 'black', // Adjusted from #0052CC to black
    marginLeft: 10,
  },
});
