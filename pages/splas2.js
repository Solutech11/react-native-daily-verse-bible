import { View, Text,StyleSheet,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import {useNetInfo} from '@react-native-community/netinfo';

export default function Splash2({navigation}) {
    const netinfo = useNetInfo()
const [theme,settheme]=useState({
    stbar:'light'
})
useEffect(() => {
  setInterval(() => {
    if (netinfo.isConnected) {
    } else {
      navigation.navigate('Network',{theme:'theme'})
    }
  }, 1000);
  setTimeout(() => {
    navigation.navigate('Verse')
  }, 7000);
},[]);

  return (
    <View style={[styles.body,{backgroundColor:'#1a203a'}]}>
      <Image source={require('../imgss/splash.gif')} style={{width:'60%',height:200, resizeMode:'stretch'}} />
      <Text style={{color:'white',fontWeight:'900',fontSize:25}}>Verse A Day</Text>
      <Text style={{color:'white',fontWeight:'900',fontSize:15}}>A new verse comes everyday try and read.</Text>

      <StatusBar style={theme.stbar} />
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
})