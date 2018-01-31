import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput
} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import firebaseApp from './firebase';

export default class CharListScreen extends Component {
  constructor(props) {
    super(props);
    this.CharRef = firebaseApp.database().ref();
    this.state = {firebaseItems: {}}
  }

  componentWillMount() {
    this.getItems();
  }

  getItems = () => {
    var items = [];

    firebase.database().ref('/posts').orderByKey().on('value', (snap) => {
      snap.forEach((child) => {
        items.push({
                     name: child.val().name,
                   });
      });
      this.setState({firebaseItems: items})
    }, error => console.log(error));
  };

  static navigationOptions = {
    title: "Liste des personnages",
  }
  render() {
    return (
      <View>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} navigation={this.props.navigation} />
      </View>
    ); 
  }

  renderRow = ({item, index}) => {
    return(
      <ListItem Char={char} navigation={this.props.navigation} />
    );
  }

  listenNewChars(CharRef) {
    CharRef.child("Characters/Manfrite").on('value', (dataSnapshot) => {
      let Chars = [], {name = '', race = '' };
      dataSnapshot.forEach((child) => {
        Chars.push({
          name: child.val().name,
          _key: child.key
        });
      });
  
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(Chars),
        Chars : Chars
      });
    });
  }
}

class ListItem extends Component {
  render() {    
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('Char', {name : this.props.Char.name})} title="Manfrite" ></Button>
      </View>
    );
  };
}