import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, Alert, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { OutletList } from '../../../data';

//sorkod buat outlet details

const OutletDetails = ({ route }) => {
    const { outletId } = route.params;
    const selectedOutlet = OutletList.find(outlet => outlet.id === outletId);
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft
                    color='grey'
                    variant="Linear"
                    size={24}
                />
            </TouchableOpacity>
            <View>
                <Image
                    style={{
                        width: 'auto',
                        height: 250,
                        resizeMode: 'cover',
                    }}
                    source={{
                        uri: item.image,
                        headers: { Authorization: 'someAuthToken' },
                    }}
                />
            </View>
            <View style={{ borderRadius: 35, height: 700, backgroundColor: '#ffffff', marginTop: -40 }}>
                <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>{item.title}</Text>
                    <Text style={{ color: '#000000', fontWeight: 'bold', color: '#fdb436', fontSize: 18 }}>{item.radius}</Text>
                </View>
                <View style={{ paddingLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="location" size={25} color="#032442"></Icon>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: 300 }}>
                            <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>{item.address}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 8 }}>
                        <Icon name="time" size={25} color="#032442"></Icon>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>{item.time}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 8, paddingLeft: 5, gap: 120 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Icon name="call" size={18} color="#032442"></Icon>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 2 }}>
                                <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>{item.call}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Icon name="navigate-outline" size={18} color="#032442"></Icon>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 2 }}>
                                <Text style={{ color: '#032442', marginLeft: 10, fontSize: 15 }}>Lihat Lokasi</Text>
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
                                    <Icon name="thumbs-up-outline" size={25} color="purple"></Icon>
                                </View>
                                <Text style={{ fontSize: 15, padding: 12, color: 'purple' }}>Jadikan Apotek Langganan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    );
};
export default OutletDetails;
