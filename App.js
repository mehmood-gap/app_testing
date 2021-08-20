/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import LoginScreen from './src/Screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
const App = () => {

  return (

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* SplashScreen which will come once for 2 Seconds */}
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        /> */}
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        /> */}
        {/* Navigation Drawer as a landing page
        {/* <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
