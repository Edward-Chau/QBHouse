import { View, StyleSheet } from "react-native";
import Colors from "../contants/colors";
import { Image } from 'expo-image';

const BottomNavBarIcon = ({iconPath, iconSize = 24,isActive}: {iconPath: any, iconSize?: number, isActive: boolean}) => {
    return (
        <View style={[styles.container,{backgroundColor: isActive ? Colors.secondary : Colors.primary}]}>
            <Image
                source={iconPath}
                style={{ width: iconSize, height: iconSize }}
                tintColor={Colors.white}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    icon: {
    },
})

export default BottomNavBarIcon