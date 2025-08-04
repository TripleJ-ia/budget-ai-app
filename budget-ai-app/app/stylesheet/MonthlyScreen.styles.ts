import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  list: { marginTop: 8, paddingHorizontal: 24 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  category: { fontSize: 16, flex: 1 },
  amount: { fontSize: 16, fontWeight: 'bold', color: '#333', marginLeft: 16 },
});

export default styles;