import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeIcon, UserIcon, ClipboardListIcon } from 'lucide-react-native';
// import { NativeWindStyleSheet } from 'nativewind';

// // Enable NativeWind Stylesheet
// NativeWindStyleSheet.create({});

const HomeScreens = () => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-xl font-bold">Welcome to Health App</Text>
    <TouchableOpacity className="mt-4 p-4 bg-blue-500 rounded-lg">
      <Text className="text-white">Consult a Doctor</Text>
    </TouchableOpacity>
    <TouchableOpacity className="mt-4 p-4 bg-green-500 rounded-lg">
      <Text className="text-white">Book Tests</Text>
    </TouchableOpacity>
  </View>
);

const DoctorListScreen = () => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-xl font-bold">Doctor Listing</Text>
  </View>
);

const ProfileScreen = () => (
  <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-xl font-bold">User Profile</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <HomeIcon size={size} color={color} />;
            } else if (route.name === 'Doctor List') {
              return <ClipboardListIcon size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return <UserIcon size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreens} />
        <Tab.Screen name="Doctor List" component={DoctorListScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
