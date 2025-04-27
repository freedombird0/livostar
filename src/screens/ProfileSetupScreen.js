// src/screens/ProfileSetupScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import colors from '../theme/colors';

export default function ProfileSetupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async () => {
    try {
      const userId = auth.currentUser.uid;
      await setDoc(doc(db, 'users', userId), {
        name,
        age,
        city,
        createdAt: new Date(),
      });

      navigation.replace('Main'); // التوجه مباشرة إلى التبويبات
    } catch (error) {
      console.error(error);
      Alert.alert('خطأ', 'حدث خطأ أثناء حفظ البيانات');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 أنشئ ملفك الشخصي</Text>

      <TextInput
        style={styles.input}
        placeholder="الاسم الكامل"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="العمر"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="المدينة"
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>حفظ ومتابعة ➡️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40, color: colors.text },
  input: { width: '100%', backgroundColor: '#eee', padding: 14, borderRadius: 10, marginBottom: 20 },
  button: { backgroundColor: colors.primary, padding: 14, borderRadius: 10, marginTop: 20, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
