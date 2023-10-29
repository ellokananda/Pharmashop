import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, Alert, Image } from 'react-native';
import { Setting2 } from 'iconsax-react-native';
import React from 'react';
import { logo } from '../../assets/images';

const Profile = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
        }}>
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
                    <View style={{paddingLeft:110, paddingBottom:30}}>
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
        </View>
    );
};

export default Profile;
