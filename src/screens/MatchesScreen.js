// src/screens/MatchesScreen.js

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

const dummyMatches = [
  {
    id: '1',
    name: 'Sara',
    photoURL: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '2',
    name: 'Adam',
    photoURL: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

export default function MatchesScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.photoURL }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 محادثاتك</Text>
      <FlatList
        data={dummyMatches}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: colors.text },
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 16 },
  name: { fontSize: 18, fontWeight: '600', color: colors.text },
});
