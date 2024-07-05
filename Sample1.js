import React from "react";
import {View,StyleSheet, StatusBar} from 'react-native';
import { useWindowDimensions } from "react-native";

function useStyles(){
  const {width,height}=useWindowDimensions();
  return StyleSheet.create({
    root:{flex:1,flexDirection:'row'},
    left:{width:(width>500) ? 200 :100,
    backgroundColor:'pink'
  },
  right:{
    flex:1,backgroundColor:'lightblue'
  },
  })
}
export default function App(){
  const styles=useStyles();
  return(
    <View style={styles.root}>
    <StatusBar hidden />
    <View style={styles.left}/>
    <View style={styles.right}/>
    </View>
  );
}



