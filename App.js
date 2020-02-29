import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import DashboardScreen from './src/screens/Dashboard/Dashboard';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponentWithRedux(
  'practical.AuthScreen',
  () => AuthScreen,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'practical.SharePlaceScreen',
  () => SharePlaceScreen,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'practical.FindPlaceScreen',
  () => FindPlaceScreen,
  Provider,
  store,
);
Navigation.registerComponent('practical.Dashboard', () => DashboardScreen);

//Start an App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'practical.AuthScreen',
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
