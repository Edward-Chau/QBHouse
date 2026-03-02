import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../contants/colors';


const HomeScreenHeader = () => {
    return (
        <View style={styles.container}>
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
