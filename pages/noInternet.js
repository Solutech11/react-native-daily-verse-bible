import { View, Text, StyleSheet,Image } from 'react-native'
import React,{useEffect} from 'react'
import {useNetInfo} from '@react-native-community/netinfo';
import { StatusBar } from 'expo-status-bar';

export default function NoInternet({navigation,route}) {
  const netinfo = useNetInfo();
  const {theme}= route.params
  useEffect(() => {
    if (netinfo.isConnected) {
      navigation.goBack()
    } else {
    }
  });
  return (
    <View style={[styles.body,{backgroundColor:'#1a203a'}]}>
      <Image source={require('../imgss/noInternet.gif')} resizeMethod='scale' style={{width:'90%',resizeMode:'contain'}} />

      <StatusBar style='light' />
    </View>
  )
}


const styles = StyleSheet.create({
  body:{
    flex:1,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
});