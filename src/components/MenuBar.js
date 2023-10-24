import { Import } from 'iconsax-react-native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {

  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#FFFFF',
      // elevation: 3,
      paddingTop: 25,
      paddingBottom: 7,
      marginHorizontal: 20,
      marginBottom: 10,
      borderRadius: 5,
      position:'relative'
    }}>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="home" size={23} color="#34354E"></Icon>
        <Text style={{ fontSize: 12 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="color-filter-outline" size={23} color="#bdbdbd"></Icon>
        <Text style={{ fontSize: 12 }}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="cart-outline" size={23} color="#bdbdbd"></Icon>
        <Text style={{ fontSize: 12 }}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name="person" size={23} color="#bdbdbd"></Icon>
        <Text style={{ fontSize: 12 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuBar;