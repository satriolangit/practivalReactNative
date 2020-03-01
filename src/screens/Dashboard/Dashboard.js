import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
  }
  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideDrawerToggle') {
      this.toggleDrawer();
    }
  }

  toggleDrawer = () => {
    const {componentId} = this.props;

    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashboardScreen;
