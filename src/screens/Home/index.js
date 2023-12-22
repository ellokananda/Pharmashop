
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, FlatList, Touchable, ScrollView } from 'react-native';
import { Header, Content, MenuBar, Feed } from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  useEffect(() => {
    const fetchProductData = () => {
      try {
        const productCollection = firestore().collection('product');
        const unsubscribeProduct = productCollection.onSnapshot(querySnapshot => {
          const products = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
        });

        return () => {
          unsubscribeProduct();
        };
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProductData();
  }, []);
  const [pencarian, setPencarian] = useState('');
  const [kategori, setKategori] = useState([
    { namaKategori: 'Artikel' },
    { namaKategori: 'Konsultasi' },
    { namaKategori: 'Obat' },
    { namaKategori: 'Apotek Terdekat' }
  ]);
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <Header pencarian={pencarian} setPencarian={setPencarian} />
          <Content />
          <View style={{
            flexDirection: 'row',
            backgroundColor: "#ffff",
            padding: 30,
            justifyContent: "space-between",
            borderRadius: 10,
            marginTop: 10,
            elevation: 7
          }}>
            <View>
              <TouchableOpacity>
                <Icon name="chatbubbles-outline" size={18} color="#032442"></Icon>
                <Text>Chat Apoteker</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Icon name="calendar-outline" size={18} color="#032442"></Icon>
                <Text>Reservasi Klinik</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Icon name="receipt-outline" size={18} color="#032442"></Icon>
                <Text>Tebus Resep</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default Home;

