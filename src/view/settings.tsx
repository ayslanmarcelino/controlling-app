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
    icon: 'account-balance-wallet'
  },
  {
    title: 'Cartões',
    icon: 'credit-card'
  },
  {
    title: 'Categorias',
    icon: 'toc'
  },
  {
    title: 'Geral',
    icon: 'settings-input-component'
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


