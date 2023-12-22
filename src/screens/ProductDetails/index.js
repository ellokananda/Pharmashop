import { ScrollView, Animated, Text, View, TouchableOpacity, Button, Alert, TextInput, Image } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Share, More } from 'iconsax-react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ActionSheet from 'react-native-actions-sheet';
import auth from '@react-native-firebase/auth';

const ProductDetails = ({ route }) => {
    const { productId } = route.params;

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [loading, setLoading] = useState(true);
    const userId = auth().currentUser.uid;
    const actionSheetRef = useRef(null);

    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };

    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };

    useEffect(() => {
        const subscriber = firestore()
            .collection('product')
            .doc(productId)
            .onSnapshot(documentSnapshot => {
                const productData = documentSnapshot.data();
                if (productData) {
                    console.log('Product data: ', productData);
                    setSelectedProduct(productData);
                } else {
                    console.log(`Product with ID ${productId} not found.`);
                }
            });
        setLoading(false);
        return () => subscriber();
    }, [productId]);

    const navigateEdit = () => {
        closeActionSheet()
        navigation.navigate('EditProduct', { productId })
    }
    const handleDelete = async () => {
        setLoading(true);
        try {
            await firestore()
                .collection('product')
                .doc(productId)
                .delete()
                .then(() => {
                    console.log('Product deleted!');
                });
            if (selectedProduct?.image) {
                const imageRef = storage().refFromURL(selectedProduct?.image);
                await imageRef.delete();
            }
            console.log('Product deleted!');
            closeActionSheet();
            setSelectedProduct(null);
            setLoading(false)
            navigation.navigate('Profile');
        } catch (error) {
            console.error(error);
        }
    }
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, 52],
    });


    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <Animated.View style={{ transform: [{ translateY: headerY }] }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft
                            color='grey'
                            variant="Linear"
                            size={24}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={openActionSheet}>
                        <More
                            color='grey'
                            variant="Linear"
                            style={{ transform: [{ rotate: '90deg' }] }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <Share color={colors.grey(0.6)} variant="Linear" size={24} />
          {userId === selectedBlog?.authorId && (
            <TouchableOpacity onPress={openActionSheet}>
              <More
                color={colors.grey(0.6)}
                variant="Linear"
                style={{transform: [{rotate: '90deg'}]}}
              />
            </TouchableOpacity>
          )}
        </View>
            </Animated.View>
            {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} color={colors.blue()} />
        </View>
      ) : (
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingTop: 62,
                    paddingBottom: 20,
                }}>
                <Image
                    style={{
                        width: 'auto',
                        height: 250,
                        resizeMode: 'cover',
                    }}
                    source={{
                        uri: selectedProduct?.image,
                        headers: { Authorization: 'someAuthToken' },
                    }}
                />
                <View style={{ borderRadius: 35, height: 700, backgroundColor: '#ffffff', marginTop: -40 }}>
                    <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>{selectedProduct?.title}</Text>
                        <Text style={{ color: '#000000', fontWeight: 'bold', color: '#fdb436', fontSize: 18 }}>
                            <Icon name="star" size={25} color="#032442"></Icon>
                            {selectedProduct?.reviews}
                        </Text>
                    </View>
                    <View style={{ paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="location" size={25} color="#032442"></Icon>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 300 }}>
                                <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>{selectedProduct?.address}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 8 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>{selectedProduct?.desc}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 8, paddingLeft: 5, gap: 120 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon name="pricetag" size={18} color="#032442"></Icon>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 2 }}>
                                    <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>{selectedProduct?.price}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon name="navigate-outline" size={18} color="#032442"></Icon>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 2 }}>
                                    <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>{selectedProduct?.sold}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 15, gap: 25 }}>
                            <TouchableOpacity style={{ padding: 3, borderRadius: 50, borderWidth: 1, borderColor: 'blue' }}
                                activeOpacity={0.5}
                                onPress={() => { }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ paddingLeft: 2, paddingTop: 9 }}>
                                        <Icon name="share-social-outline" size={25} color="blue"></Icon>
                                    </View>
                                    <Text style={{ fontSize: 15, padding: 12, color: 'blue' }}>Bagikan</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 3, borderRadius: 50, borderWidth: 1, borderColor: 'purple' }}
                                activeOpacity={0.5}
                                onPress={() => { }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ paddingLeft: 3, paddingTop: 7 }}>
                                        <Icon name="cart" size={25} color="purple"></Icon>
                                    </View>
                                    <Text style={{ fontSize: 15, padding: 12, color: 'purple' }}>Masukkan ke keranjang</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: '50' }}>

                        <View style={{ marginRight: 20, height: 200, }}>
                            <Image style={{
                                height: 162,
                                width: 162,
                                borderRadius: 8,
                            }} source={{ uri: 'https://media.istockphoto.com/id/1217210776/photo/generic-paracetamol-500mg-tablets.webp?b=1&s=170667a&w=0&k=20&c=2Lrt57zBZJooCwSzVNz379Vj59fyLMloNjhk6aktRHs=' }} />
                            <Text style={{
                                marginTop: 4,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black',

                            }}>Paracetamol</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'black',
                            }}>Rp. 17.000</Text>
                        </View>
                        <View style={{ marginRight: 20, height: 200, }}>
                            <Image style={{
                                height: 162,
                                width: 162,
                                borderRadius: 8,
                            }} source={{ uri: 'https://media.istockphoto.com/id/1217210776/photo/generic-paracetamol-500mg-tablets.webp?b=1&s=170667a&w=0&k=20&c=2Lrt57zBZJooCwSzVNz379Vj59fyLMloNjhk6aktRHs=' }} />
                            <Text style={{
                                marginTop: 4,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'black',
                            }}>Paracetamol</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'black',
                            }}>Rp. 17.000</Text>
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>
      )}
            <View>
            </View>
            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                }}
                indicatorStyle={{
                    width: 100,
                }}
                gestureEnabled={true}
                defaultOverlayOpacity={0.3}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={navigateEdit}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 18,
                        }}>
                        Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={handleDelete}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 18,
                        }}>
                        Delete
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 15,
                    }}
                    onPress={closeActionSheet}>
                    <Text
                        style={{
                            color: "#ff0000",
                            fontSize: 18,
                        }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </ActionSheet>
        </View >
    );
};
export default ProductDetails;
