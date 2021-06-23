import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import styles from './styles';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import ListDivider from '../../components/ListDivider';

import APPOINTMENTS from '../../utils/appointments';

const Home = () => {
    const [category, setCategory] = useState('');

    const handleCategorySelected = (categoryID: string) => categoryID === category
        ? setCategory('')
        : setCategory(categoryID);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelected}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={APPOINTMENTS}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={ListDivider}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default Home;