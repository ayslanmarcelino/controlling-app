import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import i18n from '../i18n';
import RNPickerSelect from 'react-native-picker-select';


export default function SimpleBottomNavigation() {

  return (
    <View style={styles.view}>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        placeholder={{
          label: i18n.t('movement.select_option'),
          value: null,
        }}
        items={[
            { label: i18n.t('movement.expense'), value: 'expense' },
            { label: i18n.t('movement.recipe'), value: 'recipe' },
            { label: i18n.t('movement.transfer'), value: 'transfer' },
        ]}
      />
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
