import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>مرحبًا بك في Livostar 💘</Text>
      <Text style={styles.subtitle}>ابدأ الآن وابدأ التواصل الحقيقي</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>ابدأ الآن</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.white,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 50,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
