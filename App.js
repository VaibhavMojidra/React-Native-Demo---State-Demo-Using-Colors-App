import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import ColorScreen from './src/screens/ColorScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ColorScreen></ColorScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS ==="android"? StatusBar.currentHeight : 0,
  },
});
