import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";


const AddProductForm = () => {

  const [productData, setProductData] = useState({
    title: "",
    desc: "",
    address:"",
    price:""
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
            placeholder="Name"
            value={productData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor="#000834"
            //multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 250 }]}>
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
        <View style={[textInput.borderDashed, { minHeight: 100 }]}>
          <TextInput
            placeholder="Address"
            value={productData.address}
            onChangeText={(text) => handleChange("address", text)}
            placeholderTextColor="#000834"
            multiline
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor="#000834"
            style={textInput.content}
          />
        </View>
        
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddProductForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
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
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#000834'
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
  },
});