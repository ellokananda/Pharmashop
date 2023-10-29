
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput, FlatList, Touchable, ScrollView } from 'react-native';
import { Header, Content, MenuBar, Feed } from '../../components';

const Home = () => {

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
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Text style={{ color: '#0082f7', fontWeight: 'bold' }}>
              Kategori
            </Text>
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
              <Text style={{ color: '#FDB436', fontWeight: 'bold' }}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <Feed data={kategori} />
          {/* <Feed data={artikel} /> */}
          <View style={{
            padding: 30,
            backgroundColor: '#ffffff',
            elevation: 10,
            marginTop: 10
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Resep Rahasia Agar Tetap Sehat</Text>
            <Text>Inilah resep rahasia agar anda tetap sehat di umur 60an</Text>
          </View>
          <View style={{
            padding: 30,
            backgroundColor: '#ffffff',
            elevation: 10,
            marginTop: 10
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Resep Rahasia Agar Tetap Sehat</Text>
            <Text>Inilah resep rahasia agar anda tetap sehat di umur 60an</Text>
          </View>
        </View>
        <MenuBar />
      </View>
    </ScrollView>
  )
}

export default Home;

