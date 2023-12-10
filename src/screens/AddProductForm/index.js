import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import { ArrowLeft } from "iconsax-react-native";
import FastImage from 'react-native-fast-image';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


const AddProductForm = () => {
  const [loading, setLoading] = useState(false);

  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpload = async () => {
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`productimages/${filename}`);

    setLoading(true);
    try {
      await reference.putFile(image);
      const url = await reference.getDownloadURL();
      await firestore().collection('blog').add({
        title: productData.title,
        desc: productData.desc,
        image: url,
        price: productData.price,
        sold: productData.sold,
        address: productData.address,
        reviewst: productData.reviews,
      });
      setLoading(false);
      console.log('Product added!');
      navigation.navigate('Profile');
    } catch (error) {
      console.log(error);
    }
  };

  const [productData, setProductData] = useState({
    title: '',
    desc: '',
    price: '',
    sold: '',
    address: '',
    image :'',
    reviews:''
  });
  const handleChange = (key, value) => {
    setProductData({
      ...productData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="#000000" variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Add Product</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Product Name"
            value={productData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor="#000834"
            //multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 200 }]}>
          <TextInput
            placeholder="Description"
            value={productData.desc}
            onChangeText={(text) => handleChange("desc", text)}
            placeholderTextColor="#000834"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 50 }]}>
          <TextInput
            placeholder="Price"
            value={productData.price}
            onChangeText={(text) => handleChange("price", text)}
            placeholderTextColor="#000834"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 70 }]}>
          <TextInput
            placeholder="Address"
            value={productData.address}
            onChangeText={(text) => handleChange("address", text)}
            placeholderTextColor="#000834"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 50 }]}>
          <TextInput
            placeholder="Sold"
            value={productData.sold}
            onChangeText={(text) => handleChange("sold", text)}
            placeholderTextColor="#000834"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 50 }]}>
          <TextInput
            placeholder="Reviews"
            value={productData.reviews}
            onChangeText={(text) => handleChange("reviews", text)}
            placeholderTextColor="#000834"
            multiline
            style={textInput.content}
          />
        </View>
        {/* <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor="#000834"
            style={textInput.content}
          />
        </View> */}
        {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: colors.blue(),
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color={colors.white()}
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color={colors.grey(0.6)} variant="Linear" size={42} />
              <Text
                style={{
                  fontFamily: fontType['Pjs-Regular'],
                  fontSize: 12,
                  color: colors.grey(0.6),
                }}>
                Upload Product Image
              </Text>
            </View>
          </TouchableOpacity>
        )}

      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0099ff" />
        </View>
      )}
    </View>
  );
};

export default AddProductForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#000000',
  },
  bottomBar: {
    backgroundColor: '#ffffff',
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    color: '#ffffff',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'blue',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    padding: 0,
  },
  content: {
    fontSize: 12,
    color: '#000000',
    padding: 0,
  },
});
