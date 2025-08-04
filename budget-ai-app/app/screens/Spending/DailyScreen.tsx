import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { CategoriesContext } from '../../context/Categories';
import { CategorySpendingContext } from '../../context/CategorySpending';
import styles from '../../stylesheet/DailyScreen.styles';

export default function DailyScreen() {
  const { categories } = useContext(CategoriesContext);
  const { spending, addSpending } = useContext(CategorySpendingContext);

  useEffect(() => {
    addSpending('Food', 12.5);
    addSpending('Transport', 7.25);
    // eslint-disable-next-line
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Categories</Text>
      </View>

      <View style={styles.list}>
        {categories.map((category) => (
          <View key={category} style={styles.row}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.amount}>${spending[category] || '0.00'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
