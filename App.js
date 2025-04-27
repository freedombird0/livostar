// App.js

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(false);

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AuthProvider, useAuth } from './src/context/AuthContext';

// Screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SwipeScreen from './src/screens/SwipeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
import ProfileEditScreen from './src/screens/ProfileEditScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import MatchScreen from './src/screens/MatchScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import TermsOfServiceScreen from './src/screens/TermsOfServiceScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs Navigation (Swipe / Matches / Settings)
const TabsNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Swipe') iconName = 'heart';
        else if (route.name === 'Matches') iconName = 'chatbubbles';
        else if (route.name === 'Settings') iconName = 'settings';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FF5A5F',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Swipe" component={SwipeScreen} />
    <Tab.Screen name="Matches" component={MatchesScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

// App Navigation (Stack)
const AppNavigation = () => {
  const { user, authLoading } = useAuth();

  if (authLoading) return <></>;

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Subscription" component={SubscriptionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={TabsNavigation} options={{ headerShown: false }} />
        </>
      )}
      
      {/* Screens Always Available */}
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Match" component={MatchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TermsOfService" component={TermsOfServiceScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
