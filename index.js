import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import LoginScreen from './src/view/login';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(LoginScreen);
