import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <DrawerNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
