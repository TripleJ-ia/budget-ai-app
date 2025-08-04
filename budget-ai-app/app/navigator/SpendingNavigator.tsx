import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import DailyScreen from '../screens/Spending/DailyScreen';
import MonthlyScreen from '../screens/Spending/MonthlyScreen';


const TopTab = createMaterialTopTabNavigator();

export default function SpendingNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <TopTab.Navigator>
        <TopTab.Screen name="Daily" component={DailyScreen} />
        <TopTab.Screen name="Monthly" component={MonthlyScreen} />
      </TopTab.Navigator>
    </View>
  );
}