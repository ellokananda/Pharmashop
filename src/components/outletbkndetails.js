import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, Alert, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { logo } from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

//sorkod buat listoutlet.js

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
                            color: '000000'
                        }}>Klinik</Text>
                    </View>
                </ScrollView>
            </View>


            <View style={{
                paddingHorizontal: 24,
                paddingVertical: 10,
                gap: 15,
            }}>
                <View style={{
                    backgroundColor: '#EFF7FF',
                    flexDirection: 'row',
                    borderRadius: 10,
                }}>
                    <Image
                        style={{
                            width: 94,
                            height: 150,
                            borderRadius: 10,
                            resizeMode: 'cover',
                        }}
                        source={{
                            uri: item.image,
                        }}
                    />
                    <View style={{
                        gap: 10,
                        justifyContent: 'space-between',
                        paddingRight: 10,
                        paddingLeft: 15,
                        flex: 1,
                        paddingVertical: 10
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View style={{ gap: 5, width: '70%' }}>
                                {/* <Text style={{
                                    color: '#000000',
                                    fontSize: 10,
                                }}>Technology</Text> */}
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: '#032442'
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={{ fontSize: 10 }}>{item.address}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="time" size={18} color="#032442"></Icon>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#032442', marginLeft: 10 }}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="call" size={18} color="#032442"></Icon>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#032442', marginLeft: 10 }}>{item.call}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                paddingHorizontal: 24,
                paddingVertical: 10,
                gap: 15,
            }}>
                <View style={{
                    backgroundColor: '#EFF7FF',
                    flexDirection: 'row',
                    borderRadius: 10,
                }}>
                    <Image
                        style={{
                            width: 94,
                            height: 150,
                            borderRadius: 10,
                            resizeMode: 'cover',
                        }}
                        source={{
                            uri: 'https://plus.unsplash.com/premium_photo-1661770294094-06167872e079?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                    />
                    <View style={{
                        gap: 10,
                        justifyContent: 'space-between',
                        paddingRight: 10,
                        paddingLeft: 15,
                        flex: 1,
                        paddingVertical: 10
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View style={{ gap: 5, width: '70%' }}>
                                {/* <Text style={{
                                    color: '#000000',
                                    fontSize: 10,
                                }}>Technology</Text> */}
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: '#032442'
                                }}>
                                    Apotek Kimia Farma Mondoroko
                                </Text>
                                <Text style={{ fontSize: 10 }}>Jl. Raya Mondoroko N0.3 KAV A-B, Kec. Singosari, Singosari, Kab. Malang, Jawa Timur, - 65151</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="time" size={18} color="#032442"></Icon>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#032442', marginLeft: 10 }}>06:30-22:00</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="call" size={18} color="#032442"></Icon>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#032442', marginLeft: 10 }}>08113279437</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{
                paddingHorizontal: 24,
                paddingVertical: 10,
                gap: 15,
            }}>
                <View style={{
                    backgroundColor: '#EFF7FF',
                    flexDirection: 'row',
                    borderRadius: 10,
                }}>
                    <Image
                        style={{
                            width: 94,
                            height: 150,
                            borderRadius: 10,
                            resizeMode: 'cover',
                        }}
                        source={{
                            uri: 'https://plus.unsplash.com/premium_photo-1661770294094-06167872e079?auto=format&fit=crop&q=80&w=1888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                    />
                    <View style={{
                        gap: 10,
                        justifyContent: 'space-between',
                        paddingRight: 10,
                        paddingLeft: 15,
                        flex: 1,
                        paddingVertical: 10
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View style={{ gap: 5, width: '70%' }}>
                                {/* <Text style={{
                                    color: '#000000',
                                    fontSize: 10,
                                }}>Technology</Text> */}
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: '#032442'
                                }}>
                                    Apotek Kimia Farma Mondoroko
                                </Text>
                                <Text style={{ fontSize: 10 }}>Jl. Raya Mondoroko N0.3 KAV A-B, Kec. Singosari, Singosari, Kab. Malang, Jawa Timur, - 65151</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="time" size={18} color="#032442"></Icon>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#032442', marginLeft: 10 }}>06:30-22:00</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="call" size={18
                                    } color="#032442"></Icon>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#032442', marginLeft: 10 }}>08113279437</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </View >
    );
};

export default Outlet;
