
import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    Dimensions,
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomSwiper = () => {
    const data = [
        {
            title: 'Slide 1',
            image: require('../../assets/images/gao.png')

        },
        {
            title: 'Slide 2',
            image: require('../../assets/images/Slidergaoperson.jpeg')
        },
        {
            title: 'Slide 3',
            image: require('../../assets/images/Dehat.png')
        },
        {
            title: 'Slide 4',
            image: require('../../assets/images/gaoPrchar.png')
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const autoRotate = () => {
        const nextIndex = (currentIndex + 1) % data.length;
        flatListRef?.current?.scrollToIndex({
            animated: true,
            index: nextIndex,
        });
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        const interval = setInterval(autoRotate, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const index = viewableItems[0].index;
            setCurrentIndex(index);
        }
    });

    const viewConfigRef = useRef({
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
    });

    const renderItems = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image
                source={item.image}
                style={{ width: '100%', height: hp(20), borderRadius: 10 }}
            />
        </View>
    );

    return (
        <View style={{ width: "100%", alignSelf: "center" }}>
            <FlatList
                ref={flatListRef}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItems}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: windowWidth,
                }}>
                {data.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                width: currentIndex == index ? 30 : 8,
                                height: 8,
                                borderRadius: 10,
                                backgroundColor: currentIndex == index ? '#a54711' : '#fff',
                                margin: 5,
                                marginTop: -hp(7),

                            }}></View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselItem: {
        width: windowWidth,
        padding: 10,
        justifyContent: "center",
        alignSelf: "center"
    },
});

export default CustomSwiper;
