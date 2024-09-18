import {
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import AppWapper from '../../components/AppWapper';
import Colors from '../../utils/Colors';
import StatusBarr from '../../apis/StatusBarr';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import VectorIcon from '../../utils/VectorIcon';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // setState(userInfo})
      // console.log('dataa of google ',userInfo)
      if(userInfo){
        await AsyncStorage.setItem('key',JSON.stringify(userInfo))
        navigation.replace('Home')
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log(error, 'Error, please try agin');
      }
    }
  };
  return (
    <AppWapper>
      <StatusBarr />
      <View
        style={{
          backgroundColor: Colors.Primary,
          flex: 1,
          paddingHorizontal: responsiveWidth(5),
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={{
              uri: 'https://thehardcopy.co/wp-content/uploads/Zepto-Featured-Image-Option-2.png',
            }}
            style={{
              width: responsiveWidth(60),
              height: 200,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: Colors.white,
              fontSize: responsiveFontSize(1.8),
              marginTop: responsiveHeight(-9.5),
              textAlign: 'center',
              letterSpacing: 1.4,
            }}>
            10 Mintes Delivery{' '}
          </Text>
        </View>

        <View style={{flex: 0.6, justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              padding: 15,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}
            onPress={signIn}>
            <VectorIcon
              type="AntDesign"
              name="google"
              size={21}
              color={Colors.Primary}
            />
            <Text
              style={{
                color: Colors.black,
                fontSize: responsiveFontSize(2.3),
                fontWeight: '500',
              }}>
              SignIn with Google
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.white,
              fontSize: responsiveFontSize(1.7),
              textAlign: 'center',
              marginVertical: responsiveHeight(1.5),
              fontWeight: '500',
            }}>
            I acceept the terms & privacy policy
          </Text>
        </View>
      </View>
    </AppWapper>
  );
}

const styles = StyleSheet.create({});
