import {FC, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';

const GameBrick:FC=()=>{
  return(
    <View style={styles.gameBrick}>
      <Image resizeMode='contain' source={require("./assets/maccabilogo.png")} style={styles.imageBrick}></Image>
    </View>
  );
}
const App:FC= ()=>{
  const [xPlayerPoints,setXPlayerPoints]=useState(0)
  const [oPlayerPoints,setOPlayerPoints]=useState(0)
  const [activePlayer,setActivePlayer]=useState(0)
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.gameTitle}>LETS PLAY TIC TAC TOE</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.xPlayerPoints}>X Player Points: {xPlayerPoints}</Text>
        <Text style={styles.oPlayerPoints}>O Player Points: {oPlayerPoints}</Text>
        </View>
        <View style={styles.row}>
          <GameBrick></GameBrick>
          <GameBrick></GameBrick>
          <GameBrick></GameBrick>
        </View>
        <View style={styles.row}>
          <GameBrick></GameBrick>
          <GameBrick></GameBrick>
          <GameBrick></GameBrick>
        </View>
        <View style={styles.row}>
          <GameBrick></GameBrick>
          <GameBrick></GameBrick>
          <GameBrick></GameBrick>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    marginTop:StatusBar.currentHeight,
  },
  gameBrick:{
    flex:1,
    margin:7,
    aspectRatio:1,
  },
  imageBrick:{
    width:"100%",
    height:"100%",
  },
  gameTitle:{
    textAlign:"center",
    color:"#F9EA41",
    margin:10,
    fontWeight:"bold",
    fontSize:28
  },
  row:{
    flexDirection:"row",
  },
  xPlayerPoints:{
    fontSize:15,
    fontWeight:"bold",
    textAlign:"center",
    color:"#F6C512",
    margin:10,
    flex:1,
  },
  oPlayerPoints:{
    fontSize:15,
    fontWeight:"bold",
    textAlign:"center",
    color:"#2372B7",
    margin:10,
    flex:1,
  }
});
export default App
