import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ListView from './components/ListView';

  /*
   TodoApp: Haupteinstiegpunkt
     render -> ListView wird angezeigt
  */

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>
          Quader Schulhaus S1l
        </Text>
        
        <ListView></ListView>
      </View>
    );
  }
}

/*
 Definition der CSS-Styles
   im Objekt "styles" 
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#DAA520',
  },
  title: {
    textAlign: "center",
    paddingBottom: "20",
    fontSize: 20,
  }
});

export default TodoApp
