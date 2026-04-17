import { StyleSheet, Text, View } from 'react-native';

export default function CollectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma collection</Text>
      <Text>Tes cartes apparaîtront ici.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
