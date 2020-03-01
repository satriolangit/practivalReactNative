import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';

import {startApp} from '../../navigations';
import BackgroundImage from '../../asset/images/LoginBackground.jpg';

class LoginScreen extends Component {
  loginHandler = () => {
    startApp();
  };
  render() {
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.heading4}>Login</Text>
          <View style={styles.formContainer}>
            <TextInput placeholder="Masukkan NIK" style={styles.input} />
            <TextInput placeholder="Masukkan Password" style={styles.input} />
            <View>
              <Button title="Login" onPress={this.loginHandler} />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  heading4: {
    fontSize: 28,
    color: '#eee',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 5,
  },
});

export default LoginScreen;
