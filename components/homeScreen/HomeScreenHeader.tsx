import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../contants/colors';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


const HomeScreenHeader = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Text>HomeScreenHeader</Text>
             <Text>HomeScreenHeader</Text>
              <Text>HomeScreenHeader</Text>
               <Text>HomeScreenHeader</Text>
                <Text>HomeScreenHeader</Text>
        </View>
    );
};

export default HomeScreenHeader;


const styles = StyleSheet.create({
    container: {
       backgroundColor: Colors.primary,
       paddingBottom: 32,
       
    },
});
