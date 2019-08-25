import * as React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import {Input, Button} from 'react-native-elements';
import i18n from '../i18n';

export interface AppProps{
}

export interface AppState{
  user:string;
  password:string;
}

export default class LoginScreen extends React.Component<any, AppState> {

  constructor(props: AppProps){
    super(props);
    this.state = {
      user:'',
      password:''
    }
  }

  public login(){
    if(this.state.user == '' && this.state.password == '')
      this.props.navigation.navigate('home', {email: this.state.user});
    else 
      console.log ('Email e/ou senha incorreto(s)');
  }

  public render(){
    return (
    <ImageBackground source={require('./../../assets/img/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Input placeholder={i18n.t('login.enter_user')} leftIcon={{name:'person', color:'gray'}} inputContainerStyle={styles.containerInput} onChangeText={user => this.setState({user})}/>
        <Input placeholder={i18n.t('login.enter_password')} leftIcon={{name:'lock', color:'gray'}} inputContainerStyle={styles.containerInput} onChangeText={password => this.setState({password})} secureTextEntry={true}/>
        <Button title={i18n.t('login.enter')} onPress={() => this.login()} buttonStyle={styles.buttonEnter}/>
        <Button title={i18n.t('login.forgot_password')} type="clear" buttonStyle={styles.forgotUserOrPassword}/>
        <Button title={i18n.t('login.not_user')} type="clear" buttonStyle={styles.forgotUserOrPassword}/>
      </View>
    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex:1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 100,
  },
  containerInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 5,
    marginBottom: 5,
    marginTop: 10,
  },
  register: {
    color: 'white',
    fontSize: 20,
    textDecorationLine: 'underline',
    margin: 30,
    textAlign: 'center'
  },
  buttonEnter: {
    borderRadius: 20,
    width: '70%',
    alignSelf: 'center',
    marginTop: 30
  },
  forgotUserOrPassword: {
    borderRadius: 30
  },
  createUser: {
    borderRadius: 30,
    marginTop: 70
  }
});
