import { Modal, StyleSheet, Text, View,Image, Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech'

// Tts.setDefaultLanguage('en-GB')
// Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact')

export default function Verse() {
    const [verse, setVerse] = useState('Verse')
    const [Scripture, setScripture] = useState('Scripture');
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);
    const [testement, settestement] = useState('Testement');

    function Apidoings() {
        setLoading(true)
        fetch('http://quotes.rest/bible/vod.json',{
            method:'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response=>response.json()).then(json=>{
            if (json) {
                setVerse(json.contents.book +' '+json.contents.chapter+':'+json.contents.number);
            settestement(json.contents.testament);
            setScripture(json.contents.verse)
            setErrors(false)
            setLoading(false)
            Speech.speak(json.contents.verse)

            }
            
        }).catch(err=>{
            if (err) {
              setLoading(false)
              setErrors(true)  
            } 
        })
    }
    useEffect(() => {
        fetch('http://quotes.rest/bible/vod.json',{
            method:'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response=>response.json()).then(json=>{
            if (json) {
                setVerse(json.contents.book +' '+json.contents.chapter+':'+json.contents.number);
            settestement(json.contents.testament);
            setScripture(json.contents.verse)
            setErrors(false)
            setLoading(false)
            Speech.speak(json.contents.verse)
            }
            
        }).catch(err=>{
            if (err) {
              setLoading(false)
              setErrors(true)  
            } 
        })
    }, []);
  return (
    <SafeAreaView style={{backgroundColor:'#1a203a',flex:1}}>
        <Modal animationType='slide' visible={errors}>
        <View style={[styles.body,{backgroundColor:'#1a203a'}]}>
                <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>
                    Error No network!!
                </Text>
                <Button title='Refresh' onPress={Apidoings} />
            </View>
        </Modal>
        <Modal animationType='fade' visible={loading} >
            <View style={[styles.body,{backgroundColor:'#1a203a'}]}>
                <Image source={require('../imgss/loading.gif')} style={{width:'60%', resizeMode:'contain'}} />

            </View>
        </Modal>
        <View style={styles.nav}>
        <Text style={{color:'red', fontSize:20, fontWeight:'bold'}}>{testement}</Text>

            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>{verse}</Text>
        </View>


      <View style={styles.body}>
      <Text style={{color:'white', fontSize:20, fontWeight:'bold',padding:30,textAlign:'center'}}>{Scripture}</Text>
      <Button title='Refresh' onPress={Apidoings} />

      </View>
      <StatusBar style='light' backgroundColor='black' />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
    nav:{
        backgroundColor:'black',
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        elevation:90,
        flexDirection:'column'

    }
})