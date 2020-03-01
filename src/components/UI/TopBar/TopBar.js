import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo e-payslip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 18,
  },
});

export default TopBar;
