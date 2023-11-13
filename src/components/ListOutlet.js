import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Icon } from 'iconsax-react-native';


const ListOutlet = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{
      paddingHorizontal: 24,
      paddingVertical: 10,
      gap: 15,
  }} onPress={() => navigation.navigate('OutletDetails', {outletId: item.id})}>
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
  </TouchableOpacity>
  );
};

export default ListOutlet;
const styles = StyleSheet.create({
  
});