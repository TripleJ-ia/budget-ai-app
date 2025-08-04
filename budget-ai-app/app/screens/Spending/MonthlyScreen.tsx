import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { CategoriesContext } from '../../context/Categories';
import { CategorySpendingContext } from '../../context/CategorySpending';
import styles from '../../stylesheet/MonthlyScreen.styles';

export default function MonthlyScreen() {
  const { categories, addCategory } = useContext(CategoriesContext);
  const { spending, addSpending } = useContext(CategorySpendingContext);

  useEffect(() => {
    addCategory('Rent');
    addCategory('Utilities');
    addSpending('Rent', 1200.0);
    addSpending('Utilities', 150.0);
    // eslint-disable-next-line
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Monthly Spending</Text>
      </View>
      <View style={styles.list}>
        {categories.map(category => (
          <View key={category} style={styles.row}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.amount}>${spending[category] || '0.00'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}