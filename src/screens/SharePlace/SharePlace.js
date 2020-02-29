import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import {addPlace} from '../../store/actions/index';

class SharePlaceScreen extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName)),
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(null, mapDispatchToProps)(SharePlaceScreen);
