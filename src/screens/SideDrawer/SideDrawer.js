import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

class SideDrawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Side Drawer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.5,
    backgroundColor: 'white',
    marginTop: 20,
    padding: 10,
    flex: 1,
  },
});

export default SideDrawer;
