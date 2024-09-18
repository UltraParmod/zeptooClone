import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import VectorIcon from '../utils/VectorIcon'

export default function HomeTitle({title,subTitle,type,name,onPress}) {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',width:'92%',alignSelf:'center',alignItems:'center'}}>
      <Text style={{color:Colors.black,fontSize:responsiveFontSize(2),fontWeight:'500'}}>{title}</Text>
      <TouchableOpacity
       onPress={onPress}
      style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{color:'#FC0998',fontSize:responsiveFontSize(2),fontWeight:'500',}}>{subTitle}</Text>
        <VectorIcon
          type={type}
          name={name}
          size={responsiveFontSize(3)}
          color={'#FC0998'}
        />
      </TouchableOpacity>
    

    </View>
  )
}

const styles = StyleSheet.create({})