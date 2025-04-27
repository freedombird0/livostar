// src/screens/TermsOfServiceScreen.js

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function TermsOfServiceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>شروط الاستخدام</Text>

      <Text style={styles.paragraph}>
        مرحباً بك في تطبيق Livostar. باستخدامك لخدماتنا، فإنك توافق على الالتزام بالشروط التالية:
      </Text>

      <Text style={styles.sectionTitle}>١. استخدام التطبيق</Text>
      <Text style={styles.paragraph}>
        يجب أن يكون عمرك 18 عامًا أو أكثر لاستخدام هذا التطبيق. أنت مسؤول عن جميع الأنشطة التي تتم عبر حسابك.
      </Text>

      <Text style={styles.sectionTitle}>٢. المحتوى والسلوك</Text>
      <Text style={styles.paragraph}>
        يجب ألا تقوم بنشر أي محتوى مسيء أو غير قانوني أو مضلل. نحتفظ بالحق في إزالة أي محتوى ينتهك هذه الشروط.
      </Text>

      <Text style={styles.sectionTitle}>٣. إنهاء الحساب</Text>
      <Text style={styles.paragraph}>
        نحتفظ بالحق في تعليق أو إنهاء حسابك إذا خالفت شروط الاستخدام دون إشعار مسبق.
      </Text>

      <Text style={styles.sectionTitle}>٤. حدود المسؤولية</Text>
      <Text style={styles.paragraph}>
        نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام التطبيق.
      </Text>

      <Text style={styles.sectionTitle}>٥. تغييرات على الشروط</Text>
      <Text style={styles.paragraph}>
        قد نقوم بتحديث هذه الشروط من حين لآخر. استمرار استخدامك للتطبيق بعد أي تعديل يعتبر قبولاً لهذه التغييرات.
      </Text>

      <Text style={styles.sectionTitle}>٦. تواصل معنا</Text>
      <Text style={styles.paragraph}>
        لأي استفسارات حول هذه الشروط، يرجى التواصل عبر البريد الإلكتروني: support@livostar.com
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
