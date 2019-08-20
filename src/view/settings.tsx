import React from 'react';
import { View, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements';


const listItems = [
  {
    title: 'Meu perfil',
    icon: 'account-circle'
  },
  {
    title: 'Contas',
    icon: 'account_balance_wallet'
  },
  {
    title: 'Cartões',
    icon: 'credit-card'
  },
  {
    title: 'Categorias',
    icon: 'category'
  },
  {
    title: 'Geral',
    icon: 'settings_input_component'
  },
  {
    title: 'Compartilhar',
    icon: 'share'
  },
  {
    title: 'Ajuda',
    icon: 'help'
  },
  {
    title: 'Sair',
    icon: 'log-out'
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
            style={styles.view}
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


