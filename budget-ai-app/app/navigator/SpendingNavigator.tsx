import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DailyScreen from '../screens/Spending/DailyScreen';
import WeeklyScreen from '../screens/Spending/WeeklyScreen';
import MonthlyScreen from '../screens/Spending/MonthlyScreen';

const TopTab = createMaterialTopTabNavigator();

export default function SpendingNavigator() {
  return (
    <TopTab.Navigator initialRouteName="Daily">
      <TopTab.Screen name="Daily" component={DailyScreen} />
      <TopTab.Screen name="Weekly" component={WeeklyScreen} />
      <TopTab.Screen name="Monthly" component={MonthlyScreen} />
    </TopTab.Navigator>
  );
}