import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../view/login';
import { homeNavigator } from './home';

const navigation = createSwitchNavigator({
  login: LoginScreen,
  home: homeNavigator
}, {
  initialRouteName: 'login'
})

export default createAppContainer(navigation);