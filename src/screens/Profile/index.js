import { ScrollView, StyleSheet, Text, View, RefreshControl, TouchableOpacity, Button, Alert, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Edit, Setting2 } from 'iconsax-react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ListProduct from '../../components/ListProduct';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';

const Profile = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const actionSheetRef = useRef(null);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };
    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };

    useEffect(() => {
        const user = auth().currentUser;
        const fetchProductData = () => {
            try {
                if (user) {
                    const userId = user.uid;
                    const productCollection = firestore().collection('product');
                    const query = productCollection.where('authorId', '==', userId);
                    const unsubscribeProduct = query.onSnapshot(querySnapshot => {
                        const products = querySnapshot.docs.map(doc => ({
                            ...doc.data(),
                            id: doc.id,
                        }));
                        setProductData(products);
                        setLoading(false);
                    });

                    return () => {
                        unsubscribeProduct();
                    };
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        const fetchProfileData = () => {
            try {
                const user = auth().currentUser;
                if (user) {
                    const userId = user.uid;
                    const userRef = firestore().collection('users').doc(userId);

                    const unsubscribeProfile = userRef.onSnapshot(doc => {
                        if (doc.exists) {
                            const userData = doc.data();
                            setProfileData(userData);
                            fetchProductData();
                        } else {
                            console.error('Dokumen pengguna tidak ditemukan.');
                        }
                    });

                    return () => {
                        unsubscribeProfile();
                    };
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        fetchProductData();
        fetchProfileData();
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
    const handleLogout = async () => {
        try {
            closeActionSheet();
            await auth().signOut();
            await AsyncStorage.removeItem('userData');
            navigation.replace('Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <View style={{
                paddingHorizontal: 24,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                height: 52,
                elevation: 8,
                paddingTop: 8,
                paddingBottom: 4,
            }}>
                <TouchableOpacity onPress={openActionSheet}>
                    <Setting2 color='black' variant="Linear" size={24} />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    gap: 10,
                    paddingVertical: 20,
                }} refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={{
                    backgroundColor: '#235284',
                    paddingLeft: 150,
                    paddingTop: 25,
                    paddingBottom: 25,
                    justifyContent: 'center'

                }}>
                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18 }}>Profil Saya</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 50,
                    padding: 30,
                    justifyContent: 'center',
                    borderRadius: 3,
                    elevation: 3,
                }}>
                    <View>
                        {/* <Image source={logo} style={{ width: '100%', objectFit: 'contain' }} /> */}
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Profil</Text>
                        <Text>Ellok Ananda</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Poin Saya</Text>
                        <Text>0 Poin</Text>
                    </View>
                </View>
                <View style={{ padding: 8, borderRadius: 3 }}>
                    <View style={{ borderWidth: 0.5, padding: 30 }}>
                        <View style={{ paddingLeft: 110, paddingBottom: 30 }}>
                            <Image
                                style={{
                                    width: 94,
                                    height: 94,
                                    borderRadius: 10,

                                    resizeMode: 'cover',
                                }}
                                source={{
                                    uri: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc=',
                                }}
                            />
                        </View>

                        <Text>Nama</Text>
                        <TouchableOpacity><Text style={{ borderWidth: 0.5, borderRadius: 5, padding: 15, marginTop: 5 }}>Ellok Ananda</Text></TouchableOpacity>
                        <Text style={{ marginTop: 10 }}>Email</Text>
                        <TouchableOpacity><Text style={{ borderWidth: 0.5, borderRadius: 5, padding: 15, marginTop: 5 }}>ellokanandaaa@gmail.com</Text></TouchableOpacity>
                        <Text style={{ marginTop: 10 }}>No Telpon</Text>
                        <TouchableOpacity><Text style={{ borderWidth: 0.5, borderRadius: 5, padding: 15, marginTop: 5 }}>+6285707756648</Text></TouchableOpacity>
                        <Text style={{ marginTop: 10 }}>Jenis Kelamin</Text>
                        <TouchableOpacity><Text style={{ borderWidth: 0.5, borderRadius: 5, padding: 15, marginTop: 5, marginBottom: 30 }}>Perempuan</Text></TouchableOpacity>
                        <Button
                            title="Ubah Profil"
                            color="#46a2da"
                            style={{ padding: 10 }}
                        />
                    </View>
                </View>
                <View style={{ margin: 15 }}>
                    <Text style={{ fontSize: 15, paddingBottom: 10 }}>Syarat dan Ketentuan</Text>
                    <Text style={{ fontSize: 15, paddingBottom: 10 }}>Kebijakan Privasi</Text>
                    <Text style={{ fontSize: 15, paddingBottom: 10 }}>Hubungi Kami</Text>
                    <Text style={{ fontSize: 15, paddingBottom: 10 }}>FAQ</Text>
                    <Text style={{ fontSize: 15, paddingBottom: 10 }}>Keluar</Text>
                </View>
                {/* <View style={{ paddingVertical: 10, gap: 10 }}>
                    {loading ? (
                        <ActivityIndicator size={'large'} color="#0099ff" />
                    ) : (
                        productData.map((item, index) => <ListProduct item={item} key={index} />)
                    )}
                </View> */}
            </ScrollView>
            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    padding: 15,
                    position: 'absolute',
                    bottom: 24,
                    right: 24,
                    borderRadius: 10,
                    shadowColor: 'blue',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,

                    elevation: 8,
                }}
                onPress={() => navigation.navigate("AddProduct")}
            >
                <Edit color="white" variant="Linear" size={20} />
            </TouchableOpacity>
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
                    onPress={handleLogout}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 18,
                        }}>
                        Log out
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
                            color: 'red',
                            fontSize: 18,
                        }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </ActionSheet>
        </View>

    );
};
export default Profile;
