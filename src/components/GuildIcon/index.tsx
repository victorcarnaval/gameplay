import React from 'react';
import { Image } from 'react-native';
import { SvgProps } from 'react-native-svg';

import styles from './styles';

type Props = {}

const GuildIcon = ({ }: Props) => {
    const uri = 'https://icon-library.com/images/discord-app-icon/discord-app-icon-15.jpg';

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}

export default GuildIcon;