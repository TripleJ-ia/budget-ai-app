import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpendingNavigator from './SpendingNavigator';
import IncomeScreen from '../screens/IncomeScreen';

const BottomTab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Spending">
      <BottomTab.Screen name="Spending" component={SpendingNavigator} />
      <BottomTab.Screen name="Income" component={IncomeScreen} />
    </BottomTab.Navigator>
  );
}
