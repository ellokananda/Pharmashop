import { ScrollView, Text, View, TouchableOpacity, Animated, TextInput, TouchableWithoutFeedback, ActivityIndicator, RefreshControl } from 'react-native';
import React, {useRef, useCallback, useState, useEffect} from 'react';
import { SearchNormal1 } from 'iconsax-react-native';

import { logo } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import ListProduct from '../../components/ListProduct';
import { ProductList } from '../../../data';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';




const Product = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState([]);

const scrollY = useRef(new Animated.Value(0)).current;
const diffClampY = Animated.diffClamp(scrollY, 0, 142);
const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
});

useEffect(() => {
    const subscriber = firestore()
      .collection('product')
      .onSnapshot(querySnapshot => {
        const products = [];
        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setProductData(products);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
        firestore()
            .collection('product')
            .onSnapshot(querySnapshot => {
                const products = [];
                querySnapshot.forEach(documentSnapshot => {
                    products.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });
                setProductData(products);
            });
        setRefreshing(false);
    }, 1500);
}, []);
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <Animated.View style={{
                zIndex: 999,
                transform: [{translateY: recentY}]
            }}>
            <View style={{
                backgroundColor: '#235284',
                padding: 10,
                justifyContent: 'center',
                
            }}>
                <Text style={{ color: '#ffffff' }}>Cari Produk</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput 
                    placeholder="Search"
                    style={{
                        backgroundColor: '#FFFFFF',
                        elevation: 3,
                        marginTop: 10,
                        marginLeft: 5,
                        borderRadius: 5,
                        flex: 1
                    }}>
                        {/* <Icon name="location" size={25} color="#6abce2" /> */}
                        {/* <Text>Jl.Golf no.44 Tasikmadu</Text> */}
                    </TextInput>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        marginHorizontal: 20,
                        marginLeft: 10,

                    }}>
                    </TouchableOpacity>
                </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{ paddingVertical: 10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    <View style={{
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 25,
                        alignItems: 'center',
                        backgroundColor: '#e6e6e6',
                        marginHorizontal: 5,
                        marginLeft: 24
                    }}>
                        <Text style={{
                            fontSize: 14,
                            lineHeight: 18,
                            color: '#000000'
                        }}>
                            Apotek Terdekat
                        </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 25,
                        alignItems: 'center',
                        backgroundColor: '#e6e6e6',
                        marginHorizontal: 5,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            lineHeight: 18,
                            color: '#000000'
                        }}>Laboratorium</Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 14,
                        paddingVertical: 10,
                        borderRadius: 25,
                        alignItems: 'center',
                        backgroundColor: '#e6e6e6',
                        marginHorizontal: 5,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            lineHeight: 18,
                            color: '#000000'
                        }}>Klinik</Text>
                    </View>
                </ScrollView>
            </View>
            </Animated.View>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                contentContainerStyle={{ paddingTop: 5 }}>
                {/* <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                {
                    ProductList.map((item, index) => {
                        return (
                            <ListProduct item={item} key={index} />
                        )
                    })
                }
                </View> */}
                <View style={{ paddingVertical: 10, gap: 10, flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap' }}>
                    {loading ? (
                        <ActivityIndicator size={'large'} color="#0099ff" />
                    ) : (
                        productData.map((item, index) => <ListProduct item={item} key={index} />)
                    )}
                </View>
            </Animated.ScrollView>
        </View >
    );
};

export default Product;
