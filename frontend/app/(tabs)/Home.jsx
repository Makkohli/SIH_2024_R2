import { View, Text, TextInput, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: '100%' }}>
          {/* Blue background for the top section */}
          <View style={{
            backgroundColor: '#0052CC',
            padding: 25,
            paddingTop: 55,
            height: '35%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 0,
          }}>
            {/* Header with notification icon */}
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: 'white'
              }}>
                Home
              </Text>
              <Ionicons name="notifications-outline" size={28} color="white" />
            </View>

            {/* Search bar */}
            <View style={{
              marginTop: 20,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 25,
              paddingHorizontal: 15,
              height: 50,
            }}>
              <Ionicons name="search-outline" size={20} color="grey" />
              <TextInput
                placeholder="Search"
                style={{
                  flex: 1,
                  marginLeft: 10,
                  fontSize: 16,
                }}
              />
              <Ionicons name="settings-outline" size={20} color="grey" />
            </View>
          </View>

          {/* Content below the blue section */}
          <View style={{ marginTop: '45%', paddingHorizontal: 20 }}>
          
           {/* Banner Image */}
          <View style={{ alignItems: 'center', marginBottom:10}}>
              <Image 
                source={require('./../../assets/images/banner1.png')}
                style={{ 
                  width: '100%', // Adjust the width as needed
                  height: 200, // Adjust the height as needed
                  borderRadius: 15,
                }} 
              />
            </View>

            {/* New Card */}
            <View style={{
  backgroundColor: '#E3FFF2',
  borderRadius: 15,
  padding: 10,
  flexDirection: 'row',
  alignItems: 'center',
  elevation: 5,
  marginBottom: 20,
}}>
  {/* Icon and Text Section */}
  <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1 }}>
    <Ionicons name="logo-whatsapp" size={60} color="#25D366" style={{ marginBottom: 10 }} />
    <Text style={{
  
      fontSize: 16,
      fontFamily:'appfontbold',
      color: '#0052CC',
      textAlign: 'center',
    }}>
      Join our WhatsApp
    </Text>
  </View>
</View>

          



            {/* Activities Section */}
            <View style={{ marginTop: 30 }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 22,
                color: '#0052CC',
                marginBottom: 15,
                marginLeft: 15,
              }}>
                Activities
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', margin: 10 }}>
                {/* Activity Card */}
                {['Task', 'Pledge', 'Discuss', 'Group', 'Campaign', 'Podcast', 'Surveys', 'Prime', 'Complaint'].map((item, index) => (
                  <View key={index} style={{
                    width: '30%', // Adjust width to fit multiple cards in a row
                    backgroundColor: '#E3FFF2',
                    borderRadius: 15,
                    padding: 10,
                    marginBottom: 15,
                    alignItems: 'center',
                    elevation: 5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                    <Ionicons 
                      name={
                        item === 'Task' ? 'checkmark-circle-outline' :
                        item === 'Pledge' ? 'hand-left-outline' :
                
                        item === 'Discuss' ? 'chatbubble-outline' :
                        item === 'Group' ? 'people-outline' :
                        item === 'Campaign' ? 'megaphone-outline' :
                        item === 'Podcast' ? 'mic-outline' :
                        item === 'Surveys' ? 'clipboard-outline' :
                    
                        item === 'Prime' ? 'star-outline' :
                        item === 'Complaint' ? 'alert-circle-outline' :
                        'help-circle-outline'
                      } 
                      size={30} 
                      color="#0052CC" 
                    />
                    <Text style={{
                      marginTop: 10,
                      fontFamily:'appfontsemibold',
                      fontSize: 16,
                      color: '#0052CC',
                    }}>
                      {item}
                    </Text>
                  </View>
                ))}
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
              marginBottom:10
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#0052CC',
                marginBottom: 10,
              }}>
                COVID-19 Information
              </Text>

              <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: '#0052CC',
              }}>
                States: Example State 1, Example State 2
              </Text>
              <Text style={{
                fontSize: 14,
                color: '#0052CC',
                marginTop: 10,
              }}>
                Total Cases: 1,000,000
              </Text>
              <Text style={{
                fontSize: 14,
                color: '#0052CC',
                marginTop: 5,
              }}>
                Increasing: 5,000
              </Text>
              <Text style={{
                fontSize: 14,
                color: '#0052CC',
                marginTop: 5,
              }}>
                Decreasing: 3,000
              </Text>
            </View>

            {/* Government Schemes Carousel */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
