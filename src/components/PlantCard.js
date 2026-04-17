import { StyleSheet, Text, View, Image } from 'react-native';

export default function PlantCard({ plant }) {
  const img = plant?.default_image?.thumbnail;
  return (
    <View style={styles.card}>
      {img ? <Image source={{ uri: img }} style={styles.img} /> : <View style={styles.imgFallback} />}
      <View style={styles.body}>
        <Text style={styles.name}>{plant?.common_name ?? 'Inconnu'}</Text>
        <Text style={styles.sci}>{plant?.scientific_name?.[0]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 12, gap: 12, borderBottomWidth: 1, borderColor: '#eee' },
  img: { width: 60, height: 60, borderRadius: 6, backgroundColor: '#eee' },
  imgFallback: { width: 60, height: 60, borderRadius: 6, backgroundColor: '#ddd' },
  body: { flex: 1, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: '600' },
  sci: { fontSize: 13, color: '#666', fontStyle: 'italic' },
});
