import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import firebaseApp from './firebase';

export default class CharScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
     title: `${firebaseApp.database().ref().child("Characters/Manfrite").on()}`,
  });
  render() {
     return (
      <View>
      </View>
    );
  }
}
    
  