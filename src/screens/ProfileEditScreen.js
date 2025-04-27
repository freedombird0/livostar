// src/screens/ProfileEditScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { auth, db } from '../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import colors from '../theme/colors';

export default function ProfileEditScreen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const loadProfile = async () => {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setName(userData.name || '');
        setAge(userData.age || '');
        setCity(userData.city || '');
        setPhotoURL(userData.photoURL || '');
      }
    };
    loadProfile();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoURL(result.uri);
    }
  };

  const saveProfile = async () => {
    if (!name || !age || !city || !photoURL) {
      Alert.alert('⚠️ خطأ', 'جميع الحقول مطلوبة.');
      return;
    }

    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      name,
      age,
      city,
      photoURL,
      updatedAt: new Date(),
    });

    Alert.alert('✅ تم التحديث', 'تم تحديث الملف الشخصي بنجاح.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={photoURL ? { uri: photoURL } : require('../../assets/images/default-avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.changePhotoText}>تغيير الصورة</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="الاسم"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="العمر"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="المدينة"
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity style={styles.button} onPress={saveProfile}>
        <Text style={styles.buttonText}>حفظ التعديلات</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, alignItems: 'center' },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  changePhotoText: { color: colors.primary, marginBottom: 20, fontWeight: 'bold' },
  input: { width: '100%', backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 10, marginTop: 10, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
