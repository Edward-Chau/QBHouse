import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreenHeader from '../../components/homeScreen/HomeScreenHeader';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { fontSize: 20 },
});
