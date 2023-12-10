import { ScrollView, StyleSheet, Text, View, RefreshControl, TouchableOpacity, Button, Alert, Image, ActivityIndicator } from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import { logo } from '../../assets/images';
import {Edit, Setting2} from 'iconsax-react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import ListProduct from '../../components/ListProduct';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
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
    
    // const getDataProduct = async () => {
    //     try {
    //         const response = await axios.get(
    //             'https://6565a4bfeb8bb4b70ef202aa.mockapi.io/pharmashop/product',
    //         );
    //         setProductData(response.data);
    //         setLoading(false)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
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

    // useFocusEffect(
    //     useCallback(() => {
    //         getDataProduct();
    //     }, [])
    // );
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
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
                <View style={{ paddingVertical: 10, gap: 10 }}>
                    {loading ? (
                        <ActivityIndicator size={'large'} color="#0099ff" />
                    ) : (
                        productData.map((item, index) => <ListProduct item={item} key={index} />)
                    )}
                </View>
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
        </View>


    );
};

export default Profile;
