import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

class InformationScreen extends Component {
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

  detailHandler = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'eslip.InformationDetailScreen',
        passProps: {
          informationId: 0,
        },
        options: {
          topBar: {
            title: {
              text: 'Detail',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <View>
        <Text>InformationScreen</Text>
        <Button title="Detail" onPress={this.detailHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default InformationScreen;
