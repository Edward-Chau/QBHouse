import { View } from "react-native";
import {Image, StyleSheet} from 'react-native';
import Colors from "../contants/colors";


const BottomNavBarIcon = ({iconPath, iconSize = 24,isActive}: {iconPath: any, iconSize?: number, isActive: boolean}) => {
    return (
        <View style={[styles.container,{backgroundColor: isActive ? Colors.secondary : Colors.primary}]}>
            <Image
                source={iconPath}
                style={[styles.icon, {width: iconSize, height: iconSize}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    icon: {
    },
})

export default BottomNavBarIcon