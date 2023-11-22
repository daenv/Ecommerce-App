import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SPACING } from '../../theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import CustomIcon from '../CustomIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

interface GradientBGIconProps {
    name: string;
    color: string;
    size: number;
}

const GradientBGIconTabLeft: React.FC<GradientBGIconProps> = ({ name, color, size }) => {
    return (
        <View style={styles.Container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.LinearGradientBG}
            >
                <AntDesign name={'left'} color={color} size={size} />
            </LinearGradient>
        </View>
    );
};

export default GradientBGIconTabLeft;

const styles = StyleSheet.create({
    Container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden',
        marginTop: 20,
    },
    LinearGradientBG: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
