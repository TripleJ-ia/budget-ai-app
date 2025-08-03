import { View, Text, StyleSheet } from 'react-native';

export default function IncomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Income</Text>
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