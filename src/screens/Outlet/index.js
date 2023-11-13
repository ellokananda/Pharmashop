import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, Alert, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { logo } from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import ListOutlet from '../../components/ListOutlet';
import { OutletList } from '../../../data';

const Outlet = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <View style={{
                backgroundColor: '#235284',
                padding: 10,
                justifyContent: 'center'
            }}>
                <Text style={{ color: '#ffffff' }}>Alamat</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={{
                        backgroundColor: '#FFFFFF',
                        elevation: 3,
                        marginTop: 10,
                        marginLeft: 5,
                        borderRadius: 5,
                        flex: 1,
                    }}>
                        <Icon name="location" size={25} color="#6abce2" />
                        <Text>Jl.Golf no.44 Tasikmadu</Text>
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
                            color: '000000'
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
                            color: '000000'
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
            {
                OutletList.map((item,index)=>{
                    return(
                        <ListOutlet item={item} key={index}/>
                    )
                })
            }
        </View >
    );
};

export default Outlet;
