import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { Card, Icon, Button } from 'react-native-elements';

export default function SimpleBottomNavigation() {

  return (
    <View style={styles.view}>
      <Card
        title='Bem-vindo(a) ao Controller!'>
        <Text style={{marginBottom: 10}}>
          A nossa ideia é organizar o seu financeiro.
        </Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Conheça-nos' />
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
