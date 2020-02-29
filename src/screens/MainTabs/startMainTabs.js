import {Navigation} from 'react-native-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    IonIcon.getImageSource('ios-home', 30),
    IonIcon.getImageSource('md-map', 30),
    IonIcon.getImageSource('md-share-alt', 30),
  ]).then(([homeIcon, mapIcon, shareIcon]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              component: {
                name: 'practical.Dashboard',
                options: {
                  bottomTab: {
                    text: 'Home',
                    fontSize: 12,
                    icon: homeIcon,
                  },
                  topBar: {
                    visible: true,
                    title: {
                      text: 'Home',
                    },
                  },
                },
              },
            },
            {
              component: {
                name: 'practical.FindPlaceScreen',
                options: {
                  bottomTab: {
                    text: 'Find',
                    fontSize: 12,
                    icon: mapIcon,
                  },
                },
              },
            },
            {
              component: {
                name: 'practical.SharePlaceScreen',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Share',
                    icon: shareIcon,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
};

export default startTabs;
