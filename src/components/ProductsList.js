import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from '../redux/CartSlice';

export default function ProductsList({data}) {
  const navigation=useNavigation()
  const dispatch=useDispatch()
  const cartStore=useSelector(state=>state.Cart)
  const handleAddToCart = (item) => {
    dispatch(addProduct(item));
  };

  const handleRemoveCart=(item)=>{
      dispatch(removeProduct(item))
  }
  
  const renderItem = ({item, index}) => {
  const inStore=cartStore.some((val)=>val.name==item.name)

    return (
      <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('Details',{data:item})
        }}
        style={{
          paddingBottom: responsiveHeight(1),
          paddingHorizontal: responsiveWidth(2),
          backgroundColor: Colors.white,
          borderRadius: 10,
          width: responsiveWidth(30),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 1,
          marginVertical: responsiveHeight(1),
          marginHorizontal: responsiveWidth(1),
          borderWidth:.3,
          borderColor:'rgba(0,0,0,.3)',
        }}>
        <Image
          source={item.images}
          style={{
            width: '100%',
            height: responsiveHeight(9),
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          resizeMode="center"
        />

        <View style={{marginTop: responsiveHeight(-0.5)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              fontWeight: '600',
              color: Colors.black,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              fontWeight: '600',
              color: Colors.grey,
            }}>
            {item.grams} g
          </Text>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: responsiveHeight(1),
              }}>
              <View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    fontWeight: '400',
                    textDecorationLine: 'line-through',
                    color: Colors.black,
                    marginBottom: responsiveHeight(-0.5),
                  }}>
                  ₹{item.discounted_price}
                </Text>
                <Text
                  style={{
                    color: Colors.PrimarySecondary,
                    fontWeight: '500',
                    fontSize: responsiveFontSize(1.8),
                  }}>
                  ₹{item.price}
                </Text>
              </View>
{
  inStore?<TouchableOpacity
  onPress={()=>{
    handleRemoveCart(item)
  }}
    style={{
      width: responsiveWidth(6),
      height: responsiveHeight(3),
      borderWidth: 0.5,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text
      style={{
        fontSize: responsiveFontSize(2),
        color: Colors.black,
      }}>
      —
    </Text>
  </TouchableOpacity>: <TouchableOpacity
  onPress={()=>{
    handleAddToCart(item)
  }}
    style={{
      width: responsiveWidth(6),
      height: responsiveHeight(3),
      borderWidth: 0.5,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text
      style={{
        fontSize: responsiveFontSize(2),
        color: Colors.black,
      }}>
      +
    </Text>
  </TouchableOpacity>
}
             
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{margin: 10, marginVertical: 5}}>
      <FlatList
      showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 2}}></View>}
        data={data}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
}


