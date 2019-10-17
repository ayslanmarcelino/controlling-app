import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import i18n from '../i18n';
import RNPickerSelect from 'react-native-picker-select';
import { Input } from 'react-native-elements';


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
        style={pickerSelectStyles}
      />
      <Input
        placeholder={i18n.t('movement.value')} 
        leftIcon={{name:'monetization-on', color:'gray'}} 
        inputContainerStyle={styles.input}
        keyboardType={'numeric'}
      />
      <Button
        title={i18n.t('movement.save')}
        buttonStyle={styles.save}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center'
  },
  input: {
    paddingTop: 20,
    alignContent: 'center',
    width: '50%',
    alignSelf: 'center',
    marginVertical: '1%',
  },
  save: {
    borderRadius: 20,
    width: '70%',
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    alignSelf: 'center',
    width: '70%'
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    alignSelf: 'center',
    width: '70%'
  },
});
