import { Drawer } from 'expo-router/drawer';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

import { router } from 'expo-router'; // Import router
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Icon at the top of the drawer */}
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Ionicons name="logo-react" size={50} color="blue" />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>My App</Text>
      </View>

      {/* Drawer Items (Screens) */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('/Notifications')}>
              <Ionicons name="notifications-outline" size={28} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: 'Notification',
          title: 'Notifications',
          drawerIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Analytics"
        options={{
          drawerLabel: 'Analytics',
          title: 'Analytics',
          drawerIcon: () => (
            <AntDesign name="linechart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Account',
          title: 'Account',
          drawerIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
      />
    </Drawer>
  );
}