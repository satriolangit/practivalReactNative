import {Navigation} from 'react-native-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    IonIcon.getImageSource('md-map', 30),
    IonIcon.getImageSource('md-share-alt', 30),
    IonIcon.getImageSource('ios-menu', 30),
  ]).then(([mapIcon, shareIcon, menuIcon]) => {
    const findPlaceScreen = {
      name: 'practical.FindPlaceScreen',
      options: {
        bottomTab: {
          text: 'Find',
          fontSize: 12,
          icon: mapIcon,
        },
        topBar: {
          visible: true,
          title: {
            text: 'Find Places',
          },
          leftButtons: {
            id: 'sideDrawerToggle',
            icon: menuIcon,
          },
        },
      },
    };

    const sharePlaceScreen = {
      name: 'practical.SharePlaceScreen',
      options: {
        bottomTab: {
          fontSize: 12,
          text: 'Share',
          icon: shareIcon,
        },
        topBar: {
          visible: true,
          title: {
            text: 'Share Places',
          },
          leftButtons: {
            id: 'sideDrawerToggle',
            icon: menuIcon,
          },
        },
      },
    };

    const mainTabs = {
      id: 'mainTabsId',
      children: [
        {
          stack: {
            children: [
              {
                component: findPlaceScreen,
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: sharePlaceScreen,
              },
            ],
          },
        },
      ],
      options: {
        topBar: {
          visible: true,
          alignment: 'center',
        },
      },
    };

    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id: 'mySideDrawer',
              name: 'practical.SideDrawer',
            },
          },
          center: {
            bottomTabs: mainTabs,
          },
        },
      },
    });
  });
};

export default startTabs;
