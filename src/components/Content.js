import { Import } from 'iconsax-react-native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Content = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#0082f7', fontWeight: 'bold' }}>
          Jadwal Apoteker
        </Text>
        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
          <Text style={{ color: '#fdb436', fontWeight: 'bold' }}>
            Lihat Semua
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 10,
        marginTop: 10
      }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 10 }}
          colors={['#018bf7', '#00baf7']} >
          <TouchableOpacity style={{ padding: 20, borderRadius: 10 }}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18 }}>Adi</Text>

            <View style={{ marginTop: 15 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="time" size={23} color="#ffffff"></Icon>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#f4f4f4', marginLeft: 10 }}>6 April 2022</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="compass" size={23} color="#ffffff"></Icon>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#f4f4f4', marginLeft: 10 }}>Apotek Sedayu</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <Icon name="chevron-forward-circle" size={35} color="#ffffff"></Icon>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View style={{
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 10,
        marginTop: 10
      }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 10 }}
          colors={['#018bf7', '#00baf7']} >
          <TouchableOpacity style={{ padding: 20, borderRadius: 10 }}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18 }}>Anisha</Text>

            <View style={{ marginTop: 15 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="time" size={23} color="#ffffff"></Icon>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#f4f4f4', marginLeft: 10 }}>6 April 2022</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="compass" size={23} color="#ffffff"></Icon>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#f4f4f4', marginLeft: 10 }}>Apotek Sawojajar</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                <Icon name="chevron-forward-circle" size={35} color="#ffffff"></Icon>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>

    </View>
  )
}
export default Content;