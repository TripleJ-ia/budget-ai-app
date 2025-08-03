import { View, Text, StyleSheet } from 'react-native';

export default function DailyScreen() {
  return (
    <View style={styles.container}>
      <Text>Daily Spending</Text>
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