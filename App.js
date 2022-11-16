import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack';

import 'expo-dev-client';

export default function App() {
  return (
    <Navigator />
  );
}