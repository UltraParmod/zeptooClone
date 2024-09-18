import {
  Alert,
  FlatList,
  Image,
  Modal,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWapper from '../../components/AppWapper';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import {apiKey} from '../../utils/Keys/Keys';
import VectorIcon from '../../utils/VectorIcon';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../utils/Colors';
import CustomeButton from '../../components/CustomeButton';
import ImagePath from '../../utils/ImagePath';
import SliderAutoPlay from '../../components/SliderAutoPlay';
import HomeTitle from '../../components/HomeTitle';
import ProductsList from '../../components/ProductsList';
import { Categories, ProductsApi } from '../../ApiData/ProductsApi';
import GridCategories from '../../components/GridCategories';
import StatusBarr from '../../apis/StatusBarr';


export default function Home() {
  const [userLocation, setUserLocation] = useState();
  const [address, setAddress] = useState('USA From Delhi-110299'); //this address i menstion statike  becouse i did't buy any map key thatswhy
  const [locationModel, setLocationModel] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Zeptoo App',
          message:
            'Zeptoo App needs access to your location ' +
            'so you can access that location products.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // setLocationModel(false)
        console.log('You can use the location');
        getCurrentLocation();
      } else {
        setLocationModel(true);
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        // console.log(position);
        if (position) {
          setLocationModel(false);
          setUserLocation({
            latitude: position.coords?.altitude,
            longitude: position.coords?.longitude,
          });
          const {data} = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`,
          );
          setAddress(data.request[0].formatted_address);
        }
      },
      error => {
        setLocationModel(true);
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  };

  return (
    <AppWapper>
      <View style={{backgroundColor:Colors.white,flex:1}}>
     <StatusBarr backgroundColor={Colors.Primary}/>
      <AppHeader address={address} locationModel={locationModel} />
      <AppBody />
      <AppFooter
        locationModel={locationModel}
        onpress={requestLocationPermission}
      />
       </View>
    </AppWapper>
  );
}

const styles = StyleSheet.create({});

const AppHeader = ({address, locationModel}) => {
  return (
    <View style={{}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(2),
          borderBottomWidth: 0.5,
          borderColor: 'rgba(0,0,0,.1)',
          marginVertical: responsiveHeight(0.8),
          paddingBottom: 6,
        }}>
        <VectorIcon
          type="Ionicons"
          name="person-circle-outline"
          size={30}
          color={'black'}
        />
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: Colors.Primary,
              fontSize: responsiveFontSize(2),
              fontWeight: '600',
            }}>
            Delivery in 10 minutes{' '}
          </Text>
          <Text
            style={{
              color: Colors.black,
              fontSize: responsiveFontSize(1.9),
              fontWeight: '400',
            }}>
            {locationModel
              ? 'No Location Enabled'
              : address
              ? `Home - ${address}`
              : 'Fetching Location...'}
          </Text>
        </View>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="note-edit-outline"
          size={30}
          color={'black'}
        />
      </View>

      <View
        style={{
          
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          marginHorizontal: 18,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          paddingHorizontal: 5,
          borderRadius: 5,
        }}>
        <VectorIcon Ioniicons name="search" size={30} color={Colors.black} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={Colors.black}
          style={{padding: 5, flex: 1, color: Colors.black}}
        />
      </View>
    </View>
  );
};

const AppBody = () => {
  return (
    <ScrollView style={{}}>
      <SliderAutoPlay />
      <HomeTitle title={'Your Go-to Items'} subTitle={'See All'} type={'Ionicons'} name={'chevron-forward-outline'} onPress={()=>{Alert.alert('ll')}} /> 
      <ProductsList data={ProductsApi} />
      <HomeTitle title={'Explore By Categories'} subTitle={'See All'} type={'Ionicons'} name={'chevron-forward-outline'} onPress={()=>{Alert.alert('ll')}} /> 
      <GridCategories data={Categories}/>  
    </ScrollView>
  );
};

const AppFooter = ({onpress, locationModel}) => {
  return (
    // <View  style={{flex:.7,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:5}}>
    <Modal
      visible={locationModel}
      animationType="slider"
      transparent={true}
      onRequestClose={() => {
        console.log('Modal Closed');
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,.6)',
        }}>
        <View
          style={{
            borderTopLeftRadius: 30,
            backgroundColor: Colors.white,
            borderTopRightRadius: 30,
            elevation: 5,
          }}>
          <View
            style={{
              height: 3,
              width: '13%',
              backgroundColor: Colors.grey,
              borderRadius: 50,
              alignSelf: 'center',
              marginVertical: 20,
              marginBottom: 20,
            }}></View>
          <VectorIcon
            type="MaterialIcons"
            name="pin-drop"
            size={70}
            color={Colors.Primary}
            style={{alignSelf: 'center'}}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              fontWeight: '500',
              color: Colors.black,
            }}>
            Location Permissions is OFF
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 10,
              fontWeight: '500',
              color: Colors.grey,
              width: '60%',
              alignSelf: 'center',
            }}>
            {' '}
            Please enable location permission for better delivery experience
          </Text>
          <CustomeButton title={'Location'} onPress={onpress} />
        </View>
      </View>
    </Modal>
    // </View>
  );
};
