import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import navigation from './src/navigation';
import * as firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase';

firebase.initializeApp(firebaseConfig)

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(navigation);