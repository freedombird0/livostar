// src/screens/SubscriptionScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import colors from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

const plans = [
  {
    id: 'monthly',
    title: 'باقة شهرية',
    price: '1 يورو / شهر',
    description: '30 تمريرة يومية - تفعيل دردشة غير محدودة',
    color: '#4CAF50',
    icon: require('../../assets/images/monthly.png'), // ضع صور جذابة عندك لاحقاً
  },
  {
    id: 'lifetime',
    title: 'اشتراك مدى الحياة',
    price: '50 يورو فقط لمرة واحدة',
    description: 'سحب غير محدود - مميزات VIP للأبد',
    color: '#FF9800',
    icon: require('../../assets/images/lifetime.png'), // ضع صور جذابة عندك لاحقاً
  },
];

export default function SubscriptionScreen({ navigation }) {
  const handleSubscribe = (planId) => {
    console.log(`🔥 اشترك المستخدم بالخطة: ${planId}`);
    // هنا لاحقاً نربط مع Stripe أو Google Pay
    navigation.navigate('Swipe'); // حالياً نرجعه للسوايب بعد الاشتراك
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚀 اختر خطتك للاستمتاع الكامل</Text>

      {plans.map((plan) => (
        <TouchableOpacity
          key={plan.id}
          style={[styles.card, { borderColor: plan.color }]}
          onPress={() => handleSubscribe(plan.id)}
        >
          <Image source={plan.icon} style={styles.image} />

          <Text style={[styles.planTitle, { color: plan.color }]}>
            {plan.title}
          </Text>

          <Text style={styles.price}>{plan.price}</Text>

          <Text style={styles.description}>{plan.description}</Text>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: plan.color }]}
            onPress={() => handleSubscribe(plan.id)}
          >
            <Text style={styles.buttonText}>اشترك الآن</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ccc', marginTop: 20 }]}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={[styles.buttonText, { color: 'black' }]}>تخطي مؤقتاً</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.text, textAlign: 'center', marginBottom: 30 },
  card: { borderWidth: 2, borderRadius: 15, padding: 20, alignItems: 'center', marginBottom: 20, backgroundColor: 'white' },
  image: { width: 100, height: 100, marginBottom: 15 },
  planTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 18, color: colors.muted, marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', color: colors.text, marginBottom: 20 },
  button: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  buttonText: { fontSize: 16, color: 'white', fontWeight: 'bold', textAlign: 'center' },
});
