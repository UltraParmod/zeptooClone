{/* <VectorIcon type="AntDesign" name="search1" size={20} color={'Grey'} />;


// SHA KEY GET for fitrebase password is android.........................
// PS E:\zeptooClone\android\app> keytool -list -v -alias androiddebugkey -keystore debug.keystore 

let obj={
    name:'Parmod Kmar',
    address:{
      place:'Delhi',
      pincode:110094
    },
    localStorage:function(){
      return "All data is here..."
    }
  }
  // const userName=Object.assign({},obj)
  // const userName=JSON.parse(JSON.stringify(obj))
  var _ = require('lodash');
  const userName= _.cloneDeep(obj)
  userName.address.place="Noida"
  console.log(userName)
  console.log(obj)




  import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Zdemo from '../../../Zdemo'

export default function Cart() {
 const [count1,setCount1]=useState(0)
 const [count2,setCount2]=useState(0)

 
  





  const  _functioncallData=useCallback(()=>{
    setCount2(count2+1)
  },[count2])
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text style={{borderWidth:1,padding:10}}  onPress={()=>{
        setCount1(count1+1)
      }}>Count : {count1}</Text>
      <Zdemo count2={count2} _functioncallData={_functioncallData}/>
    </View>
  )
}

const styles = StyleSheet.create({})


import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const Zdemo = ({count2,_functioncallData}) => {
    console.log('Demoo data')
  return (
    <View>
      <Text onPress={_functioncallData}>count   {count2}</Text>
    </View>
  )
}

export default memo(Zdemo)

const styles = StyleSheet.create({}) */}


// class parmod extends React.Component{
//   render(){

//   }
// }

// export default sumit=()=>{
//   return(
// <View>

// </View>
//   )
// }

// class parmod extends React.Component{


// }
// export default parmod


function add (a,b){
  return a+b
}

add(5,5)





// slider custime auto play 
// ?=############################################


// import React, { useEffect, useRef, useState } from 'react';
// import {
//     FlatList,
//     Dimensions,
//     View,
//     StyleSheet,
//     Text,
//     Image,
// } from 'react-native';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import ImagePath from './utils/ImagePath';
// import { responsiveHeight } from 'react-native-responsive-dimensions';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const CustomSwiper = () => {
//     const data = [
//         {
//             title: 'Slide 1',
//             image: ImagePath.banner01

//         },
//         {
//             title: 'Slide 2',
//             image: ImagePath.banner02
            
//         },
//         {
//             title: 'Slide 3',
//             image: ImagePath.banner03
           
//         },
//         {
//             title: 'Slide 4',
//             image: ImagePath.banner04
           
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const flatListRef = useRef(null);

//     const autoRotate = () => {
//         const nextIndex = (currentIndex + 1) % data.length;
//         flatListRef?.current?.scrollToIndex({
//             animated: true,
//             index: nextIndex,
//         });
//         setCurrentIndex(nextIndex);
//     };

//     useEffect(() => {
//         const interval = setInterval(autoRotate, 3000);

//         return () => clearInterval(interval);
//     }, [currentIndex]);

//     const onViewRef = useRef(({ viewableItems }) => {
//         if (viewableItems.length > 0) {
//             const index = viewableItems[0].index;
//             setCurrentIndex(index);
//         }
//     });

//     const viewConfigRef = useRef({
//         waitForInteraction: false,
//         viewAreaCoveragePercentThreshold: 50,
//     });

//     const renderItems = ({ item }) => (
//         <View style={styles.carouselItem}>
//             <Image
//                 source={item.image}
//                 style={{ width: '100%', height:responsiveHeight(20), borderRadius: 10 }}
//             />
//         </View>
//     );

//     return (
//         <View style={{ width: "100%", alignSelf: "center" }}>
//             <FlatList
//                 ref={flatListRef}
//                 data={data}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={renderItems}
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 pagingEnabled={true}
//                 onViewableItemsChanged={onViewRef.current}
//                 viewabilityConfig={viewConfigRef.current}
//             />
//             <View
//                 style={{
//                     position: 'absolute',
//                     bottom: 0,
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     width: windowWidth,
//                 }}>
//                 {data.map((item, index) => {
//                     return (
//                         <View
//                             key={index}
//                             style={{
//                                 width: currentIndex == index ? 30 : 8,
//                                 height: 8,
//                                 borderRadius: 10,
//                                 backgroundColor: currentIndex == index ? '#a54711' : '#fff',
//                                 margin: 5,
//                                 marginTop: -responsiveHeight(7),

//                             }}></View>
//                     );
//                 })}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     carouselItem: {
//         width: windowWidth,
//         padding: 10,
//         justifyContent: "center",
//         alignSelf: "center"
//     },
// });

// export default CustomSwiper;

// $$$$$$$$$$$$$$$$$$$###################################
