import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function CustomeButton({title,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{marginVertical:30,backgroundColor:Colors.Primary,justifyContent:'center',alignItems:'center',padding:10,alignSelf:'center',width:'80%',borderRadius:20}}>
      <Text style={{color:Colors.white,fontSize:16}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})