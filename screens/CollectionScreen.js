import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { usePlants } from '../src/hooks/usePlants';
import PlantCard from '../src/components/PlantCard';

export default function CollectionScreen() {
  const { data, isLoading, error } = usePlants({ page: 1 });

  if (isLoading) return <View style={styles.center}><ActivityIndicator /></View>;
  if (error) return <View style={styles.center}><Text>Erreur: {error.message}</Text></View>;

  return (
    <FlatList
      data={data?.data ?? []}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PlantCard plant={item} />}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
