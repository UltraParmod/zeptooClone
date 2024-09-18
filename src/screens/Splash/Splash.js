import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppWapper from '../../components/AppWapper'
import Colors from '../../utils/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import StatusBarr from '../../apis/StatusBarr'

export default function Splash({navigation}) {
  useEffect(()=>{
      setTimeout(()=>{
          AsyncStorage.getItem('key').then((result)=>{
              if(result){
                navigation.replace('Home')
              }else{
                navigation.replace('Login')
              }
          }).catch((err)=>{
            console.log(err)
          })
      },2000)
  },[])
  return (
    <AppWapper>
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.Primary
      }}>
        <StatusBarr/>
        <Image source={{uri:'https://thehardcopy.co/wp-content/uploads/Zepto-Featured-Image-Option-2.png'}} style={{width:200,height:200, resizeMode:'contain'}}/>
      </View>
    </AppWapper>
  )
}

const styles = StyleSheet.create({})