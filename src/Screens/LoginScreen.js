// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component

// import {ImagesPath} from '../../Styles';
import React, {useState, createRef, useEffect} from 'react';

const {height, width} = Dimensions.get('window');
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';


const LoginScreen = ({navigation}) => {
  
  return (
    <ScrollView>
        <View >
            <Text>Login Hello</Text>
        </View>
    </ScrollView>
  );
};



export default LoginScreen;
