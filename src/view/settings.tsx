import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import i18n from '../i18n';

const listItems = [
  {
    title: i18n.t('settings.profile'),
    icon: 'account-circle'
  },
  {
    title: i18n.t('settings.accounts'),
    icon: 'account-balance-wallet'
  },
  {
    title: i18n.t('settings.cards'),
    icon: 'credit-card'
  },
  {
    title: i18n.t('settings.categories'),
    icon: 'toc'
  },
  {
    title: i18n.t('settings.general'),
    icon: 'settings-input-component'
  },
  {
    title: i18n.t('settings.share'),
    icon: 'share'
  },
  {
    title: i18n.t('settings.help'),
    icon: 'help'
  },
  {
    title: i18n.t('settings.quit'),
    icon: 'exit-to-app'
  },
]

export default function SimpleBottomNavigation() {

  return (
    <View style={styles.view}>
      {
        listItems.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
          />
        ))
      }
    </View>
    
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 25
  }
});
