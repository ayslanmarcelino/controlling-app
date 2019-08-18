import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';

export interface AppProps {
    navigation: any; 
}

export interface AppState { }

export default class HomeScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { };
  }

  public render() {
    return (
      <View style={styles.container}>
        <Button title="Teste"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 100,
  },
});