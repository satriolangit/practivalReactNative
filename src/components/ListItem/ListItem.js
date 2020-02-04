import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const ListItem = props => {
  return (
    <TouchableHighlight onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#cecece',
    marginBottom: 5,
  },
});

export default ListItem;
