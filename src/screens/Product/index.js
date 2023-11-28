import { ScrollView, Text, View, TouchableOpacity, Animated, TextInput, TouchableWithoutFeedback } from 'react-native';
import React, {useRef} from 'react';
import { SearchNormal1 } from 'iconsax-react-native';

import { logo } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import ListProduct from '../../components/ListProduct';
import { ProductList } from '../../../data';

const navigation = useNavigation();

const scrollY = useRef(new Animated.Value(0)).current;
const diffClampY = Animated.diffClamp(scrollY, 0, 142);
const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
});



const Product = () => {
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
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                contentContainerStyle={{ paddingTop: 142 }}>
                <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                {
                    ProductList.map((item, index) => {
                        return (
                            <ListProduct item={item} key={index} />
                        )
                    })
                }
                </View>
            </Animated.ScrollView>
        </View >
    );
};

export default Product;
