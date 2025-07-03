import { View, Text, StyleSheet } from 'react-native';

export default function ShoppingTab() {
  return (
    <View style={styles.container}>
      <Text>Shopping</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});