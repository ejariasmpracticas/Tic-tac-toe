
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from './components/Header'
import GameBoard from './components/GameBoard'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={ gameStarted: false }
}

startGame() {
  this.setState({ gameStarted: true })
}

render() {
   const { gameStarted } = this.state
   return (
     <View style={styles.container}>
       <Header />
       {
         gameStarted ? (
           <GameBoard />
         ) : (
           <View>
             <Text style={styles.welcome}>
               Welcome to the game!
             </Text>
             <TouchableOpacity onPress={() => this.startGame()}>
               <Text style={styles.instructions}>
                 Click here to start
               </Text>
             </TouchableOpacity>
           </View>
         )
       }
     </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
      fontSize: 20,
      marginTop: 50,
    },
    instructions: {
      textAlign: 'center', 
      marginTop: 20,
      color: 'grey',
      marginBottom: 5,
    },


});
