/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */


import React from 'react';
import { FlatList, View } from 'react-native';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { itemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';




export const PicturesScreen = () => {



  return (
    <View style={{ flex:1, marginHorizontal:20 }}>
        <FlatList
            data= { menuItems }
            renderItem= { ({item}) => <FlatListMenuItem menuItem={item}/> }
            keyExtractor= { (item) => item.name}
            ListHeaderComponent= {() => <HeaderTitle title= "Opciones de menu"/> }
            ItemSeparatorComponent= { () => itemSeparator()}
        />
    </View>
  );
};
