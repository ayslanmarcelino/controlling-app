import * as React from 'react';
import { View, StyleSheet, ImageBackground, ToastAndroid, Platform, Alert, Text } from 'react-native';
import {Input, Button} from 'react-native-elements';
import i18n from '../i18n';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Modal from "react-native-modal";

export interface AppProps{
}

export interface AppState{
  user:string;
  password:string;
  register:{user:string, password:string};
}

export default class LoginScreen extends React.Component<any, AppState> {

  constructor(props: AppProps){
    super(props);
    this.state = {
      user:'',
      password:'',
      register: {
        user:'',
        password:''
      }
    }
  }

  public register() {
    let {register} = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(register.user, register.password)
      .then(async (dados) =>  {
        if (Platform.OS == 'android')
          ToastAndroid.show(i18n.t('register.success'), 3000)
        else
          Alert.alert(i18n.t('general.success'), i18n.t('register.success'));
        let doc = await firebase.firestore().collection('user').add(register)
        doc.id
        doc.update({
          id:doc.id
      })
    }).catch((erro) => {
      if (Platform.OS == 'android')
        ToastAndroid.show(i18n.t('register.fail'), 3000)
      else
        Alert.alert(i18n.t('general.try_again'), i18n.t('register.fail'));
    })
  }

  public login(){
    firebase.auth().signInWithEmailAndPassword(this.state.user,this.state.password)
      .then(() => {
        this.props.navigation.navigate('home', {user: this.state.user});
      })
      .catch((erro) => {
      if (Platform.OS == 'android')
        ToastAndroid.show(i18n.t('login.user_or_email_incorrect'), 3000)
      else
        Alert.alert(i18n.t('general.try_again'), i18n.t('login.user_or_email_incorrect'));
    })
  }

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  public render(){
    return (
      <ImageBackground source={require('./../../assets/img/background.png')} style={styles.background}>
        <View style={styles.container}>
          <Input 
            placeholder={i18n.t('login.enter_user')} 
            leftIcon={{name:'person', color:'gray'}} 
            inputContainerStyle={styles.containerInput} 
            onChangeText={(user) => this.setState({user})}
          />
          <Input 
            placeholder={i18n.t('login.enter_password')} 
            leftIcon={{name:'lock', color:'gray'}} inputContainerStyle={styles.containerInput} 
            onChangeText={(password) => this.setState({password})} 
            secureTextEntry={true}
          />
          <Button 
            title={i18n.t('login.enter')} 
            onPress={() => this.login()} 
            buttonStyle={styles.buttonEnter}
          />
          <Button 
            title={i18n.t('login.forgot_password')} 
            type="clear" 
            buttonStyle={styles.forgotUserOrPassword}
          />
          <Button 
            title={i18n.t('login.not_user')} 
            type="clear" 
            buttonStyle={styles.forgotUserOrPassword}
            onPress={this.toggleModal}
          />
          <Modal isVisible={this.state.isModalVisible}>
            <View style={ styles.modal }>
              <Text style={styles.text}>
                {i18n.t('register.new_user')}
              </Text>
              <Input 
                placeholder={i18n.t('register.enter_user')}
                leftIcon={{name:'person', color:'gray'}}
                inputContainerStyle={styles.containerInput}
                onChangeText={(user) => this.setState({register: {...this.state.register, user}})}
              />
              <Input 
                placeholder={i18n.t('register.enter_password')} 
                leftIcon={{name:'lock', color:'gray'}} inputContainerStyle={styles.containerInput}
                secureTextEntry
                onChangeText={(password) => this.setState({register: {...this.state.register, password}})}
              />
              <Button
                title={i18n.t('register.register')}
                onPress={() => this.register()}
                buttonStyle={styles.buttonEnter}
              />
              <Button 
                title={i18n.t('register.cancel')}
                onPress={this.toggleModal}
                buttonStyle={styles.buttonClose}
                type="outline"
              />
            </View>
          </Modal>
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
  modal: {
    backgroundColor: 'white',
    flex: 0.9
  },
  text: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    flex: 0.1,
    padding: 5,
    marginBottom: 50,
    marginTop: 25
  },
  container: {
    flex:1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 100
  },
  containerInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 5,
    marginBottom: 5,
    marginTop: 10
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
  buttonClose: {
    borderRadius: 20,
    width: '60%',
    alignSelf: 'center',
    marginTop: 10
  },
  forgotUserOrPassword: {
    borderRadius: 30
  },
  createUser: {
    borderRadius: 30,
    marginTop: 70
  }
});
