import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const EditProductForm = ({ route }) => {
    const { productId } = route.params;

    const [productData, setProductData] = useState({
        title: '',
        desc: '',
        price: '',
        sold: '',
        address: '',
        image: '',
        reviews: ''
    });
    const handleChange = (key, value) => {
        setProductData({
            ...productData,
            [key]: value,
        });
    };
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProductById();
    }, [productId]);

    const getProductById = async () => {
        try {
            const response = await axios.get(
                `https://6565a4bfeb8bb4b70ef202aa.mockapi.io/pharmashop/product/${productId}`,
            );
            setProductData({
                title: response.data.title,
                desc: response.data.desc,
                price: response.data.price,
                sold: response.data.sold,
                address: response.data.address,
                reviews: response.data.reviews
            })
            setImage(response.data.image)
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    const handleUpdate = async () => {
        setLoading(true);
        try {
            await axios
                .put(`https://6565a4bfeb8bb4b70ef202aa.mockapi.io/pharmashop/product/${productId}`, {
                    title: productData.title,
                    desc: productData.desc,
                    image,
                    price: productData.price,
                    sold: productData.sold,
                    address: productData.address,
                    reviews: productData.reviews
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setLoading(false);
            navigation.navigate('Profile');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color="#000000" variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.title}>Edit Product</Text>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingVertical: 10,
                    gap: 10,
                }}>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Title"
                        value={productData.title}
                        onChangeText={text => handleChange('title', text)}
                        placeholderTextColor="efefef"
                        multiline
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
                <View style={[textInput.borderDashed, { minHeight: 100 }]}>
                    <TextInput
                        placeholder="Sold"
                        value={productData.sold}
                        onChangeText={(text) => handleChange("sold", text)}
                        placeholderTextColor="#000834"
                        multiline
                        style={textInput.content}
                    />
                </View>
                <View style={[textInput.borderDashed, { minHeight: 100 }]}>
                    <TextInput
                        placeholder="Reviews"
                        value={productData.reviews}
                        onChangeText={(text) => handleChange("reviews", text)}
                        placeholderTextColor="#000834"
                        multiline
                        style={textInput.content}
                    />
                </View>
                <View style={[textInput.borderDashed]}>
                    <TextInput
                        placeholder="Image"
                        value={image}
                        onChangeText={text => setImage(text)}
                        placeholderTextColor="#efefef"
                        style={textInput.content}
                    />
                </View>



            </ScrollView>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttonLabel}>Update</Text>
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

export default EditProductForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        elevation: 8,
        paddingTop: 8,
        paddingBottom: 4,
    },
    title: {
        
        fontSize: 16,
        color: "#000000",
    },
    bottomBar: {
        backgroundColor: "#ffffff",
        alignItems: 'flex-end',
        paddingHorizontal: 24,
        paddingVertical: 10,
        shadowColor: "#0000000",
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
       
        color: "#000000",
        padding: 0,
    },
    content: {
        fontSize: 12,
        
        color: "#000000",
        padding: 0,
    },
});
