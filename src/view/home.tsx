import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default function SimpleBottomNavigation() {

  return (
    <View style={styles.view}>
      <Text>Bem-vindo(a) ao Controlling!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
