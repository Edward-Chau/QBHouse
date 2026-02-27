import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerPosition: 'right',
          headerShown: false,
          drawerType: 'front',
          drawerStyle: {
            width: '75%',
          }
        }}
      >
        <Drawer.Screen name="Tabs" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
