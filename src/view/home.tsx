import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import i18n from '../i18n';

export default function SimpleBottomNavigation() {

  return (
    <View style={styles.view}>
      <Card
        title={i18n.t('home.welcome', { appName: i18n.t('appName')})}>
        <Text style={{marginBottom: 10}}>
          {i18n.t('home.slogan')}
        </Text>
        <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title={i18n.t('home.meet_us')} />
      </Card>
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
