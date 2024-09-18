import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../utils/Colors';

export default function GridCategories({data}) {
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,.1)',
          width: responsiveWidth(21.9),
          borderRadius: 5,
          alignItems: 'center',
          margin: '1%',
          paddingBottom: responsiveHeight(1),
        }}>
        <Image
          source={require('../../assets/images/imageData01.png')}
          style={{
            width: '100%',
            height: responsiveHeight(8),
            borderRadius: 5,
            backgroundColor: '#FCECFA',
          }}
          resizeMode="center"
        />
        <Text
          style={{
            color: Colors.Primary,
            fontWeight: 'bold',
            paddingHorizontal: responsiveWidth(1),
            fontSize: responsiveFontSize(1.4),
            marginTop: responsiveHeight(0.5),
          }}>
          {item}
        </Text>
      </View>
    );
  };
  return (
    <View style={{marginHorizontal: responsiveWidth(2), width: '100%'}}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{width: 10, height: 10}}></View>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{marginBottom: 10}}></View>}
        data={data}
        renderItem={renderItem}
        scrollEnabled={false}
        numColumns={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
