import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import StatusBarr from '../../apis/StatusBarr';
import Colors from '../../utils/Colors';
import AppWapper from '../../components/AppWapper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import VectorIcon from '../../utils/VectorIcon';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  decrementQuantity,
  incrementQuantity,
} from '../../redux/CartSlice';

export default function Details({ route }) {
  const productsDetails = route?.params?.data;

  // console.log('dtataaakk....', productsDetails);
  const dispatch = useDispatch();
  const _CartStore = useSelector(state => state.Cart);

  return (
    <AppWapper>
      <StatusBarr backgroundColor={Colors.white} barStyle={'dark-content'} />
      <AppHeader />
      <AppBody data={productsDetails} cartData={_CartStore} />
      <AppFooter data={productsDetails} cartData={_CartStore} />
    </AppWapper>
  );
}

const AppHeader = ({ }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,.2)',
        paddingBottom: responsiveHeight(1),
        backgroundColor: Colors.white,
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <VectorIcon
          name={'arrow-back-ios'}
          type={'MaterialIcons'}
          size={25}
          color={Colors.black}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <VectorIcon
          name={'search'}
          type={'Feather'}
          size={25}
          color={Colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};

const AppBody = ({ data, cartData }) => {
  const [isOpened, setisOpened] = useState('');
  const dispatch = useDispatch();

  // console.log('data................',data)

  // console.log('cartData.............',cartData)

  const handleAddToCart = () => {
    dispatch(addProduct(data));
  };

  const handleDescription = () => {
    setisOpened(!isOpened);
  };
  const handleIncrement = () => {
    dispatch(incrementQuantity(data));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity(data));
  };
  // const isInCart = true;
  const isInCart = cartData.find(
    productsDetails => productsDetails.name == data.name,
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingVertical: responsiveHeight(4),
          backgroundColor: '#A1A1A1A1',
        }}>
        <Image
          resizeMode='contain'
          source={data.images}
          style={{
            width: '100%',
            height: responsiveHeight(30),
          }}
        />
      </View>

      <View
        style={{
          paddingVertical: responsiveHeight(1),
          paddingHorizontal: responsiveWidth(4),
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: responsiveFontSize(2.5),
            fontWeight: '500',
          }}>
          {data?.name}
        </Text>
        <Text
          style={{
            color: Colors.PrimarySecondary,
            fontSize: responsiveFontSize(2),
            fontWeight: '500',
          }}>
          See all Quinoa..
        </Text>
        <Text style={{ color: Colors.grey, fontSize: responsiveFontSize(1.5) }}>
          {data?.grams} g
        </Text>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: responsiveHeight(0.5),
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: responsiveFontSize(2),
                fontWeight: '500',
              }}>
              ₹{data?.price}
            </Text>
            <Text
              style={{
                color: Colors.grey,
                fontSize: responsiveFontSize(1.8),
                fontWeight: '500',
                textDecorationLine: 'line-through',
                marginHorizontal: responsiveWidth(1),
              }}>
              ₹{data?.discounted_price}
            </Text>
            <Text
              style={{
                backgroundColor: Colors.orange,
                paddingHorizontal: responsiveHeight(1),
                paddingVertical: responsiveWidth(1),
                borderRadius: 4,
                color: Colors.white,
                fontSize: responsiveFontSize(1.5),
              }}>
              {data?.discount_Percentage}% OFF
            </Text>
          </View>
          {isInCart ? (
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity onPress={handleIncrement} style={{ padding: 5 }}>
                <VectorIcon
                  name={'plussquare'}
                  type={'AntDesign'}
                  color={Colors.black}
                  size={20}
                />
              </TouchableOpacity>
              <Text
                style={{ color: Colors.black, fontSize: responsiveFontSize(2) }}>
                {isInCart.quantity}
              </Text>
              <TouchableOpacity onPress={handleDecrement} style={{ padding: 5 }}>
                <VectorIcon
                  name={'minussquare'}
                  type={'AntDesign'}
                  color={Colors.black}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text
                onPress={handleAddToCart}
                style={{
                  backgroundColor: Colors.orange,
                  paddingHorizontal: responsiveWidth(3),
                  paddingVertical: responsiveHeight(0.4),
                  borderRadius: 5,
                  fontSize: responsiveFontSize(2),
                  color: Colors.white,
                }}>
                Add
              </Text>
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(1),
          backgroundColor: '#A1A1A1A1',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: responsiveFontSize(2.2),
            fontWeight: '400',
          }}>
          Products Description
        </Text>
        {isOpened ? (
          <TouchableOpacity onPress={handleDescription}>
            <VectorIcon
              type={'Ionicons'}
              name={'chevron-down-outline'}
              size={25}
              color={Colors.black}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleDescription}>
            <VectorIcon
              type={'Ionicons'}
              name={'chevron-up-outline'}
              size={25}
              color={Colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          backgroundColor: '#A1A1A1A1',
          paddingHorizontal: responsiveWidth(4),
        }}>
        {isOpened && (
          <View>
            <Text
              style={{
                color: Colors.black,
                fontSize: responsiveFontSize(1.8),
                paddingVertical: responsiveHeight(1),
              }}>
              {data?.description}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const AppFooter = ({ data, cartData }) => {
  const isInCart = cartData.find(
    productsDetails => productsDetails.name == data.name,
  );

  return (
    <View
      style={{
        // backgroundColor:'red'
        paddingBottom: responsiveHeight(2),
        flex: 0.4,
        marginTop: responsiveScreenHeight(1),
        paddingHorizontal: responsiveWidth(4),
        justifyContent: 'flex-end',
      }}>
      {isInCart && (
        <TouchableOpacity
          style={{
            backgroundColor: Colors.orange,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            alignSelf: 'center',
            borderRadius: 10,
            paddingVertical: responsiveHeight(1.3),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.3),
              color: Colors.white,
              fontWeight: '500',
            }}>
            View Cart{' '}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
