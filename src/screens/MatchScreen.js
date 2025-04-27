// src/screens/MatchScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

export default function MatchScreen({ route, navigation }) {
  const { userMatched } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.matchText}>🎉 تم التطابق مع {userMatched.name}!</Text>

      <Image
        source={{ uri: userMatched.photoURL }}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Matches')}
      >
        <Text style={styles.buttonText}>شاهد المحادثة 💬</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'gray', marginTop: 12 }]}
        onPress={() => navigation.navigate('Swipe')}
      >
        <Text style={styles.buttonText}>استمر بالسحب ➡️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center', padding: 24 },
  matchText: { fontSize: 24, fontWeight: 'bold', color: colors.primary, marginBottom: 20 },
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 30 },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
