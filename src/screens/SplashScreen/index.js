import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
      checkToken();
    }, []);
    const checkToken = async () => {
      try {
        const userDataJSON = await AsyncStorage.getItem('userData');
  
        if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);
          const {userToken, expirationTime} = userData;
  
          if (userToken && expirationTime) {
            const currentTime = new Date().getTime();
  
            if (currentTime <= expirationTime) {
              setTimeout(() => {
                navigation.replace('MainApp');
              }, 1500);
            } else {
              setTimeout(() => {
                navigation.replace('Login');
              }, 1500);
            }
          } else {
            setTimeout(() => {
              navigation.replace('Login');
            }, 1500);
          }
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1500);
        }
      } catch (error) {
        console.error('Error retrieving token data:', error);
        setTimeout(() => {
          navigation.replace('Login');
        }, 1500);
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PHARMASHOP</Text>
      <Text style={{size:10, paddingLeft:130}}>keep in touch with us</Text>
      <View style={styles.infoContainer}>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    color: 'blue',
    alignSelf: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
  }
});