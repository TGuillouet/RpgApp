import {  
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import React, { Component } from 'react';

import CharScreen from './CharScreen';
import CharListScreen from './CharListScreen';
import CharAddScreen from './CharAddScreen';

const App = StackNavigator ({
  Home : { screen : CharListScreen },
  Char : { screen : CharScreen     },
  New  : { screen : CharAddScreen  },
});

AppRegistry.registerComponent('rpg', () => App);
