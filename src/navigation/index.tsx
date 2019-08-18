import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../view/login';
import HomeScreen from '../view/home';

const navigation = createSwitchNavigator({
  login: LoginScreen,
  home: HomeScreen
}, {
  initialRouteName: 'login'
})

export default createAppContainer(navigation);