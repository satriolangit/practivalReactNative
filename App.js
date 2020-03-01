import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore';
import {registerScreens} from './src/screens';

const store = configureStore();

registerScreens(Provider, store);

//Start an App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'eslip.LoginScreen',
        options: {
          topBar: {
            visible: true,
            title: 'Login',
          },
        },
      },
    },
  });
});
