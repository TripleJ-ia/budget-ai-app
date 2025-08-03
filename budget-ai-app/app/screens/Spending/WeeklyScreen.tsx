import { View, Text, StyleSheet } from 'react-native';

export default function WeeklyScreen() {
  return (
    <View style={styles.container}>
      <Text>Weekly Spending</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});