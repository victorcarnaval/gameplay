import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';
import styles from './styles';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

const Category = ({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) => {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary80, secondary100]}
            >
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.unchecked} />

                    <Icon width={48} height={48} />

                    <Text style={styles.title}>{title}</Text>
                </View>
            </LinearGradient>
        </RectButton>
    );
}

export default Category;