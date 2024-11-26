import React from 'react';
import AddDestination from '../screen/AddDestination';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AddDestination />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
