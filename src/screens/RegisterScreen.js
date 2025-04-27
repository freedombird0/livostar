import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const { register } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await register(email, password);
    } catch (err) {
      console.log("Registration Error:", err);
      setError('فشل التسجيل، تحقق من البيانات');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>إنشاء حساب جديد</Text>
      <TextInput style={styles.input} placeholder="البريد الإلكتروني" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="كلمة المرور" onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>تسجيل</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>العودة لتسجيل الدخول</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 16, borderRadius: 8 },
  button: { backgroundColor: '#007bff', padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: '#fff', fontSize: 16 },
  link: { textAlign: 'center', color: '#28a745' },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
});
