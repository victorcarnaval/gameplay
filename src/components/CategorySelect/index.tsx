import React from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';
import Category from '../Category';

import CATEGORIES from '../../utils/categories';

type Props = {
    categorySelected: string;
    setCategory: (categoryID: string) => void;
}

const CategorySelect = ({ categorySelected, setCategory }: Props) => {

    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {CATEGORIES.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                />
            ))}
        </ScrollView>
    );
}

export default CategorySelect;