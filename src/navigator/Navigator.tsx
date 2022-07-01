/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */


import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { CommercialDetail } from '../screens/CommercialDetail';
import { CreateProperty } from '../screens/CreateProperty';
import { HouseDetail } from '../screens/HouseDetail';
import { LandDetail } from '../screens/LandDetail';
import { PicturesScreen } from '../screens/PicturesScreen';
import { PropertyDetails } from '../screens/PropertyDetails';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <View style={{flex:1, backgroundColor: theme.colors.background}}>
        <NavigationContainer
          theme={theme}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="HouseDetail" component={HouseDetail} />
            <Stack.Screen name="CommercialDetail" component={CommercialDetail} />
            <Stack.Screen name="CreateProperty" component={CreateProperty} />
            <Stack.Screen name="LandDetail" component={LandDetail} />
            <Stack.Screen name="PicturesScreen" component={PicturesScreen} />
            <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
          </Stack.Navigator>
      </NavigationContainer>
      </View>
  );
};
