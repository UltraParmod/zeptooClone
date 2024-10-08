import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import Login from '../screens/Login/Login';
import Cart from '../screens/Cart/Cart';
import Details from '../screens/Details/Details';
import Wishlist from '../screens/Wishlist/Wishlist';


const Stack = createNativeStackNavigator();
export default function StackRoute() {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{headerShown:false}}
    >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Wishlist" component={Wishlist} />
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})