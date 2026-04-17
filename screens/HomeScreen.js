import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import { usePlant } from '../src/hooks/usePlants';
import PlantCard from '../src/components/PlantCard';
import { randomInt } from '../src/utils/random';    
import { useState } from 'react'; 

export default function HomeScreen({ navigation }) {
  const [id] = useState(() => randomInt(1, 100));
  const { data: plant, isLoading, error } = usePlant(id); 
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      {isLoading && <ActivityIndicator />}
      {error && <Text>Erreur: {error.message}</Text>}                             
      {plant && <PlantCard plant={plant} />}  
      <Text style={styles.title}>CCG Plante</Text>
      <Button title="Voir ma collection" onPress={() => navigation.navigate('Collection')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  title: { fontSize: 28, fontWeight: 'bold' },
});
