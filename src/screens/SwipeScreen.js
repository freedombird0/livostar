// src/screens/SwipeScreen.js

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { collection, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import colors from '../theme/colors';

const SwipeScreen = ({ navigation }) => {
  const [profiles, setProfiles] = useState([]);
  const [swipeCount, setSwipeCount] = useState(0);
  const maxSwipes = 30;
  const swiperRef = useRef(null);

  useEffect(() => {
    const loadDummyProfiles = async () => {
      setProfiles([
        { id: '1', name: 'Sara, 23', photoURL: 'https://randomuser.me/api/portraits/women/68.jpg' },
        { id: '2', name: 'Adam, 26', photoURL: 'https://randomuser.me/api/portraits/men/65.jpg' },
        { id: '3', name: 'Lina, 21', photoURL: 'https://randomuser.me/api/portraits/women/12.jpg' },
      ]);
    };
    loadDummyProfiles();
  }, []);

  const handleSwipeRight = async (cardIndex) => {
    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];
    const userId = auth.currentUser?.uid;
    if (docSnap.exists()) {
        console.log('✅ Match Detected!');
      
        await setDoc(doc(db, 'matches', `${generateMatchId(userId, userSwiped.id)}`), {
          users: {
            [userId]: { id: userId, name: auth.currentUser.displayName || "أنت", photoURL: "https://randomuser.me/api/portraits/lego/1.jpg" },
            [userSwiped.id]: userSwiped,
          },
          usersMatched: [userId, userSwiped.id],
          timestamp: serverTimestamp(),
        });
      
        navigation.navigate('Match', { userMatched: userSwiped });
      }
      

    if (!userId) return;

    const docSnap = await getDoc(doc(db, 'users', userSwiped.id, 'swipes', userId));

    if (docSnap.exists()) {
      console.log('✅ Match Detected!');

      await setDoc(doc(db, 'matches', `${generateMatchId(userId, userSwiped.id)}`), {
        users: {
          [userId]: { id: userId, name: auth.currentUser.displayName || "أنت", photoURL: "https://randomuser.me/api/portraits/lego/1.jpg" },
          [userSwiped.id]: userSwiped,
        },
        usersMatched: [userId, userSwiped.id],
        timestamp: serverTimestamp(),
      });

      navigation.navigate('Matches');
    } else {
      await setDoc(doc(db, 'users', userId, 'swipes', userSwiped.id), userSwiped);
    }
  };

  const handleSwipeLeft = async (cardIndex) => {
    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];
    const userId = auth.currentUser?.uid;

    if (!userId) return;

    await setDoc(doc(db, 'users', userId, 'passes', userSwiped.id), userSwiped);
  };

  const handleSwipe = (cardIndex) => {
    setSwipeCount((prev) => prev + 1);
    if (swipeCount + 1 >= maxSwipes) {
      navigation.navigate('Subscription');
    }
  };

  const generateMatchId = (id1, id2) => (id1 > id2 ? `${id1}_${id2}` : `${id2}_${id1}`);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={profiles}
        stackSize={3}
        cardIndex={0}
        animateCardOpacity
        verticalSwipe={false}
        backgroundColor="transparent"
        onSwipedRight={handleSwipeRight}
        onSwipedLeft={handleSwipeLeft}
        onSwiped={handleSwipe}
        renderCard={(card) => (
          card ? (
            <View style={styles.card}>
              <Image source={{ uri: card.photoURL }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{card.name}</Text>
              </View>
            </View>
          ) : (
            <View style={[styles.card, { justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={styles.name}>لا مزيد من الملفات 😢</Text>
            </View>
          )
        )}
        overlayLabels={{
          left: { title: 'NOPE', style: { label: { color: 'red', fontSize: 24 } } },
          right: { title: 'LIKE', style: { label: { color: 'green', fontSize: 24 } } },
        }}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => swiperRef.current?.swipeLeft()}
        >
          <Entypo name="cross" size={40} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => swiperRef.current?.swipeRight()}
        >
          <Ionicons name="heart" size={40} color="green" />
        </TouchableOpacity>
      </View>

      <Text style={styles.swipeCount}>
        تبقى {Math.max(maxSwipes - swipeCount, 0)} تمريرة مجانية اليوم
      </Text>
    </View>
  );
};

export default SwipeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: 'white', borderRadius: 10, height: Dimensions.get('window').height * 0.6, width: Dimensions.get('window').width * 0.9, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 },
  image: { width: '100%', height: '80%', borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  info: { padding: 10 },
  name: { fontSize: 22, fontWeight: 'bold', color: colors.text, textAlign: 'center' },
  buttonsContainer: { flexDirection: 'row', marginTop: 20, gap: 40 },
  button: { backgroundColor: 'white', borderRadius: 50, padding: 12, elevation: 5 },
  swipeCount: { marginTop: 12, fontSize: 14, color: colors.muted },
});
