import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { logo } from '../../assets/images';

const Cart = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <View style={{
                backgroundColor: '#235284',
                paddingLeft: 140,
                paddingTop: 25,
                paddingBottom: 25,
                justifyContent: 'center'

            }}>
                <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18 }}>Keranjang Saya</Text>
            </View>
            <View style={{ padding: 10, flexDirection: 'row', justifyContent:'space-between' }}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Alamat Pengiriman</Text>
                <Text style={{ color: '#000000', fontWeight: 'bold', color: '#fdb436' }}>Ubah</Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ color: '#000000' }}>Kos</Text>
                <Text style={{ color: '#000000' }}>Jl. Golf No. 44, Tasikmadu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65143, Indonesia</Text>
            </View>
            <View style={{ padding: 10, flexDirection: 'row', gap: 30 }}>
                <Icon name="checkbox" size={20} color="#000000"></Icon>
                <Text style={{ color: '#235284', fontWeight: 'bold', color: '#235284' }}>Pilih Semua</Text>
            </View>
            <View style={{ padding: 10, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <Icon name="checkbox-outline" size={20} color="#000000"></Icon>
                    <Image
                        style={{
                            width: 94,
                            height: 94,
                            borderRadius: 10,
                            resizeMode: 'cover',
                        }}
                        source={{
                            uri: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-2968162/sgm_sgm_llm_susu_formula_-400_g-_full01_jlmejy9a.jpeg',
                        }}
                    />
                </View>
                <View style={{ width: 230, paddingLeft: 10 }}>
                    <Text style={{ color: '#000000', fontWeight: 'bold' }}>SGM LLM+ (0-12 BULAN) BEBAS LAKTOSA FORMULA BAYI 400 GR</Text>
                    <Text style={{ color: '#537d90', fontWeight: 'bold', paddingTop: 7 }}>Rp. 84.200</Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <View style={{ width: 20, height: 20, backgroundColor: '#cadeed', marginTop: 10, borderRadius: 4 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 7 }}>-</Text>
                        </View>
                        <View style={{ width: 35, height: 20, backgroundColor: '#ffffff', marginTop: 10, borderRadius: 4, borderWidth: 0.5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 13 }}>1</Text>
                        </View>
                        <View style={{ width: 20, height: 20, backgroundColor: '#cadeed', marginTop: 10, borderRadius: 4 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 6 }}>+</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{justifyContent:'center', padding:10}}>
            <Button
                        title="Tambah Produk"
                        color="#46a2da"
                        style={{ padding: 10 }}
                    />
            </View>
        </View>
    );
};

export default Cart;
