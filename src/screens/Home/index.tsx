import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';

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

        </View>
    );
}

export default Home;