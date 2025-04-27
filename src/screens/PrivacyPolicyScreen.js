// src/screens/PrivacyPolicyScreen.js

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>سياسة الخصوصية</Text>

      <Text style={styles.paragraph}>
        نحن في Livostar نهتم بخصوصيتك ونسعى لحماية بياناتك بأقصى قدر من الأمان.
      </Text>

      <Text style={styles.sectionTitle}>١. المعلومات التي نجمعها</Text>
      <Text style={styles.paragraph}>
        عند استخدام تطبيقنا، نقوم بجمع معلومات مثل الاسم، العمر، البريد الإلكتروني، الموقع الجغرافي، والصور التي تقوم بتحميلها.
      </Text>

      <Text style={styles.sectionTitle}>٢. كيف نستخدم المعلومات</Text>
      <Text style={styles.paragraph}>
        نستخدم المعلومات لتحسين تجربتك، تقديم خدماتنا بشكل أفضل، وتحليل نشاط التطبيق لتطوير الميزات المستقبلية.
      </Text>

      <Text style={styles.sectionTitle}>٣. الحماية</Text>
      <Text style={styles.paragraph}>
        نحن نتبع معايير عالية من الحماية لحماية بياناتك من الوصول غير المصرح به أو التلاعب أو الضياع.
      </Text>

      <Text style={styles.sectionTitle}>٤. حقوق المستخدم</Text>
      <Text style={styles.paragraph}>
        لك الحق في تعديل أو حذف معلوماتك الشخصية في أي وقت عبر إعدادات حسابك أو التواصل مع فريق الدعم.
      </Text>

      <Text style={styles.sectionTitle}>٥. تغييرات سياسة الخصوصية</Text>
      <Text style={styles.paragraph}>
        قد نقوم بتحديث هذه السياسة من حين لآخر. سيتم إعلامك بأي تغييرات عبر إشعار داخل التطبيق.
      </Text>

      <Text style={styles.sectionTitle}>٦. تواصل معنا</Text>
      <Text style={styles.paragraph}>
        لأي استفسارات بخصوص الخصوصية، يرجى التواصل عبر البريد: support@livostar.com
      </Text>

      <Text style={styles.footer}>آخر تحديث: أبريل 2025</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.primary, marginBottom: 20, textAlign: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, color: colors.text },
  paragraph: { fontSize: 16, color: colors.muted, marginTop: 10, lineHeight: 24 },
  footer: { fontSize: 14, color: colors.muted, marginTop: 30, textAlign: 'center' },
});
