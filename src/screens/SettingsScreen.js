// src/screens/SettingsScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import colors from '../theme/colors';

export default function SettingsScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
      Alert.alert('خطأ', 'فشل تسجيل الخروج');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ الإعدادات</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('ProfileEdit')}
      >
        <Text style={styles.optionText}>تعديل الملف الشخصي</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('PrivacyPolicy')}
      >
        <Text style={styles.optionText}>سياسة الخصوصية</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('TermsOfService')}
      >
        <Text style={styles.optionText}>شروط الاستخدام</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: '#ff4444', marginTop: 30 }]}
        onPress={handleLogout}
      >
        <Text style={[styles.optionText, { color: 'white' }]}>تسجيل الخروج 🚪</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: colors.text },
  option: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingHorizontal: 10 },
  optionText: { fontSize: 18, color: colors.text },
});
