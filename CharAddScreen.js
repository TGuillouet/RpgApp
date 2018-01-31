import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TextInput
} from 'react-native';
import firebaseApp from './firebase'
import { StackNavigator, } from 'react-navigation';

export default class CharAddScreen extends Component {
  constructor(props) {
    super(props);
    this.CharRef = firebaseApp.database().ref();
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource,
      newChar : { name : '', race : '' }
    };
  }

  static navigationOptions = {
    title: "Ajouter un nouveau personnage",
  }

  render() {
    const navigation = this.props.navigation; // Navigation var declaration
    return (
      <View>
        <TextInput onChangeText={(nameInput) => { this.setState({newChar : {name : nameInput, race : this.state.raceText}}); 
                                              this.setState({nameText : nameInput})}} value={this.state.nameText} /> 
        <TextInput onChangeText={(raceInput) => { this.setState({newChar : {name : this.state.nameText, race : raceInput}}); 
                                              this.setState({text1 : raceInput})}} value={this.state.raceText} /> 
        <Button title="Add Character" onPress={this._addChar.bind(this)} />        
      </View>
    );
  }

  _addChar () {
    if (this.state.newChar.name === "" && this.state.newChar.race === "") {
      return;
    }
    this.CharRef.child('Characters/' + this.state.newChar.name + '/name').set(this.state.newChar.name); // set allow us to write data if they not exist OR update it if it exst
    this.CharRef.child('Characters/' + this.state.newChar.name + '/race').set(this.state.newChar.race);
    this.setState({newChar : {name : '', race : '', }});
  }
}

