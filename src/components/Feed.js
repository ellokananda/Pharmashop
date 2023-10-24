import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, StatusBar, TextInput, FlatList, Touchable, ScrollView, ImageBackground } from 'react-native';


const Feed = (props) => {
    return (
        <View>
            <FlatList
                data={props.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            paddingVertical: 2,
                            marginRight: 10,
                            paddingHorizontal: 10,
                            backgroundColor: '#ffffff',
                            borderRadius: 25,
                            elevation: 3,
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                        {/* <Image
                            source={{ uri: item.image }}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                borderColor: '#ffffff',
                                borderWidth: 2,
                            }}
                        /> */}
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.judul}</Text>
                        <Text>{item.namaKategori}</Text>
                        <Text>{item.deskripsi}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Feed;