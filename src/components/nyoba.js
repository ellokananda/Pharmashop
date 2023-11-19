import React, { useState } from 'react'
import logo from '../../assets/images/logow.png'
import { View, StatusBar, TextInput, Image, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, FlatList, LogBox } from 'react-native'
import { SearchNormal1, DiscountShape, TicketDiscount, Gift, Star, ShoppingCart, Heart } from 'iconsax-react-native';
import Feather from 'react-native-vector-icons/Feather'
import { Product } from '../../../data';

const win = Dimensions.get('window')
LogBox.ignoreAllLogs(true)

export default function Home() {

  const [xtProduct, setxtProduct] = useState(false)

  function ItemProduct({ item }) {
    return (
      <View style={styles.recContainer2}>
        <Image style={styles.recImage} source={{ uri: item.image }} />
        <TouchableOpacity onPress={() => onSelectedFav(item)} style={{ position: 'absolute', right: 0, padding: 2 }}>
          <Heart variant={item.selected ? 'Bold' : 'linear'} color={item.selected ? '#FF8A65' : '#D1D1D1'} />
        </TouchableOpacity>
        <Text style={styles.recDesk}>{item.namaProduk}</Text>
        <Text style={styles.recPrice}>{item.hargaProduk}</Text>
      </View>
    )
  }

  async function onSelectedFav(item) {
    try {
      item.selected = !item.selected
      setxtProduct(!xtProduct)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} barStyle={'dark-content'}/>
      <View style={styles.header}></View>
      <Image style={styles.logoHeader} source={logo} />
      <View style={styles.searchContainer}>
        <View style={styles.searchContainer2}>
          <SearchNormal1 variant='Linear' color='#674D7A' style={{ marginLeft: 12, }} />
          <TextInput style={styles.search} placeholder='Search' placeholderTextColor={'#674D7A'}></TextInput>
        </View>
        <TouchableOpacity style={{ borderStartWidth: 1, borderColor: '#ddcfe8', justifyContent: 'center', paddingHorizontal: 16 }}>
          <ShoppingCart variant='Linear' color='#674D7A' />
        </TouchableOpacity>
      </View>
      <View style={styles.fiturContainer}>
        <View style={styles.fiturContainer2}>
          <DiscountShape size={32} variant='Linear' color='#674D7A' />
          <Text style={styles.fiturText}>Promotions</Text>
        </View>
        <View style={styles.fiturContainer2}>
          <Gift size={32} variant='Linear' color='#674D7A' />
          <Text style={styles.fiturText}>New Arrivals</Text>
        </View>
        <View style={styles.fiturContainer2}>
          <Star size={32} variant='Linear' color='#674D7A' />
          <Text style={styles.fiturText}>Best Sellers</Text>
        </View>
        <View style={styles.fiturContainer2}>
          <TicketDiscount size={32} variant='Linear' color='#674D7A' />
          <Text style={styles.fiturText}>Vouchers</Text>
        </View>
      </View>
      <ScrollView horizontal style={styles.iklanContainer}>
        <Image style={styles.iklanImage} source={{ uri: 'https://ganlop.com/wp-content/uploads/2021/06/FA_MO_061621_HYDRASTAY_MODEL-DUO-LANDSCAPE-BANNER-KV-01-1536x768.jpg' }} />
        <Image style={styles.iklanImage} source={{ uri: 'https://cdn1-production-images-kly.akamaized.net/xt7Ibul8Ko40smrw0Iib0nblF1U=/680x383/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4221439/original/001742300_1668058890-Landscape-MakeUp-Class-FF-2022.jpg' }} />
        <Image style={styles.iklanImage} source={{ uri: 'https://assets.kompasiana.com/items/album/2023/09/29/kv-lipgloss-final-landscape-65164ce508a8b5796b441162.jpg?t=o&v=770' }} />
      </ScrollView>
      <Text style={styles.recHeader}>Rekomendasi</Text>
      <FlatList
        data={Product}
        extraData={xtProduct}
        numColumns={2}
        contentContainerStyle={styles.containerProduct}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={ItemProduct}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerProduct : {
    marginLeft: 8,
    // paddingLeft : 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 136,
    backgroundColor: 'white',
  },

  logoHeader: {
    width: win.width,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: 16,
  },

  searchContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    height: 52,
    elevation: 3,
    marginHorizontal: 14,
    borderRadius: 10,
    marginTop: -28,
    backgroundColor: '#F0F0FF',
  },

  searchContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  search: {
    marginHorizontal: 8,
    color: '#674D7A',
    width: win.width - 138,
  },

  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    marginHorizontal: 14,
  },

  fiturContainer2: {
    marginTop: 32,
    alignItems: 'center',
  },

  fiturText: {
    fontSize: 10,
    color: '#674D7A',
  },

  iklanContainer: {
    marginTop: 16,
    height: 232,
  },

  iklanImage: {
    marginTop: 16,
    borderRadius: 15,
    width: win.width - 16,
    height: 212,
    marginHorizontal: 8,
    resizeMode: 'contain',
  },

  recContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 212,
    marginHorizontal: 8,
    padding: 2,
  },

  recHeader: {
    marginLeft: 8,
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#674D7A',
  },

  recContainer2: {
    marginRight : 20,
    height: 200,
  },

  recImage: {
    height: 162,
    width: 162,
    borderRadius: 8,
  },

  recDesk: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '500',
    color: 'black',
  },

  recPrice: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
  },

})