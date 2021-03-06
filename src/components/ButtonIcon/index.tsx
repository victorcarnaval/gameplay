import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Image, Text, View } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = RectButtonProps & {
    title: string
}

const ButtonIcon = ({ title, ...rest }: Props) => {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}

export default ButtonIcon;