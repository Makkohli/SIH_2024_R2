import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import AntDesign1 from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function _layout() {
  return (
   <Tabs screenOptions={{
    headerShown:false
   }}>
    <Tabs.Screen name='Home' options={{
      tabBarIcon:({color})=><AntDesign name="Home" size={24} color="black" />
    }}/>
    <Tabs.Screen name='Contact' options={{
      tabBarIcon:({color})=><AntDesign1 name="Contacts" size={24} color="black" />
    }}/>
    <Tabs.Screen name='News' options={{
      tabBarIcon:({color})=><FontAwesome name="Newspaper-o" size={24} color="black" />
    }}/>
    <Tabs.Screen name='Settings' options={{
      tabBarIcon:({color})=><Feather name="Settings" size={24} color="black" />
    }}/>
   </Tabs>
  )
}
