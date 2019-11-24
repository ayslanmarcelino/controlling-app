import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import i18n from '../i18n';

export default function SimpleBottomNavigation() {

  return (
    <View style={styles.view}>
      <Text>
        {i18n.t('no_page.undefined_page')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  }
});
