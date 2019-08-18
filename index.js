import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import navigation from './src/navigation';

  if (__DEV__) {
    activateKeepAwake();
  }

registerRootComponent(navigation);