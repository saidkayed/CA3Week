import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert
  } from 'react-native';


class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="SWAPI"
          onPress={() => navigate('Swapi')}
        />
      );
    }
  }
  export default HomeScreen;