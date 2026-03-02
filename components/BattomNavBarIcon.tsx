import { View, StyleSheet } from "react-native";
import Colors from "../contants/colors";
import { Image } from 'expo-image';

const BottomNavBarIcon = ({iconPath, iconSize = 24,isActive}: {iconPath: any, iconSize?: number, isActive: boolean}) => {
    return (
        <View style={[styles.container,{backgroundColor: isActive ? Colors.secondary : Colors.white}]}>
            <Image
                source={iconPath}
                style={{ width: iconSize, height: iconSize }}
                tintColor={isActive ? Colors.white : Colors.primary}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        padding: 10,
        aspectRatio: 1,
    },
    icon: {
    },
})

export default BottomNavBarIcon