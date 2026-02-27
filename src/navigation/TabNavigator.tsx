import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import HaircutScreen from '../screens/HaircutScreen';
import MoreScreen from '../screens/MoreScreen';
import { View } from 'react-native';
import Colors from '../../contants/colors';
import BottomNavBarIcon from '../../components/BattomNavBarIcon';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }: any) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary, // Dark blue background
          height: 80,
          paddingBottom: 20,
        },
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.white,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -5,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: '主頁',
          tabBarIcon: ({ color ,focused}) => <BottomNavBarIcon iconPath={require('../../assets/icons/home.svg')} iconSize={24} isActive={focused} />,
        }}
      />
      <Tab.Screen 
        name="Haircut" 
        component={HaircutScreen} 
        options={{
          tabBarLabel: '剪髮',
          tabBarIcon: ({ color ,focused}) => <Feather name="scissors" size={24} color={color} />,
        }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreScreen}
        options={{
          tabBarLabel: '更多',
          tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={24} color={color} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.openDrawer();
          },
        }}
      />
    </Tab.Navigator>
  );
}
