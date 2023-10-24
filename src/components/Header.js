import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (Props) => {
    return(
        <View>
            <StatusBar barStyle="dark-content"  backgroundColor={'#f4f4f4'}></StatusBar>
        <Text style={{color: '#212121'}}>Hello</Text>
        <Text style={{fontSize:22, fontWeight: 'bold', color: '#212121'}}>Ellok</Text>
        <View style={{flexDirection: 'row'}}>
            <TextInput value={Props.pencarian} 
            onChangeText={text => Props.setPencarian(text) }
            placeholder='Cari Produk'
            style={{backgroundColor:'#FFFFFF', 
            elevation: 3, 
            marginTop: 20, 
            marginLeft: 10, 
            borderRadius: 5,
            flex: 1,
            }}/>
            <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems:'center',
              backgroundColor: '#0082f7',
              marginTop:20,
              marginHorizontal:20,
              borderRadius:5,
              marginLeft:10,
              elevation:3,
            }}>
            <Icon name="search" size={25} color="#FFFFFF"/>
            </TouchableOpacity>
          
        </View> 
        </View>
    )
}

export default Header;