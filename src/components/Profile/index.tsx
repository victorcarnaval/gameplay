import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Avatar from '../Avatar';

const Profile = () => {

    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/victorcarnaval.png" />

            <View>
                <View style={styles.user}>
                    <Text style={styles.gretting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Victor!
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    );
}

export default Profile;