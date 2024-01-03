import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ListProduct = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.listcard}>
    <TouchableOpacity
      style={{
        paddingHorizontal: 24,
        paddingVertical: 10,
      }}
      onPress={() =>
        navigation.navigate('ProductDetails', {productId: item.id})
      }>
        <View style={styles.box}>
          <Image
            style={styles.imageproduct}
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.detail}>{item.price}</Text>
            <Text style={styles.detail}>{item.sold}</Text>
          </View>
        </View>
      
    </TouchableOpacity>
    </View>
  );
};

export default ListProduct;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listcard: {
    flexdirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom:60,
    marginHorizontal:6
  },
  box: {
    height: 130,
    width: 130,
  },
  imageproduct: {
    height: 150,
    width: 150,
    borderRadius: 10,
    paddingBottom:10
  },
  title: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  detail: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
});
