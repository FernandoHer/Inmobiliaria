/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    name:string,
    data: any[],
    funOnChange: <K extends Object>( value: K, field: string ) => void,
}


export const ChosePropiety = ({data, funOnChange, name}:Props) => {
  const [isSelected, setIsSelected] = useState('');
  return (
    <ScrollView>
      <View>
        <FlatList
            data= { data }
            renderItem= { ({item}) =>
                <TouchableOpacity
                    onPress={()=> {
                        funOnChange( item.name, name);
                        setIsSelected(item.name);
                    }}
                >
                  <View style={styles.figuras}>
                    <View style={{alignItems:'center',backgroundColor: (item.name === isSelected) ? '#rgba(0,0,0,.2)' : 'white' } }>
                      <Text style={styles.textItems}> {item.valor}</Text>
                      <Text style={styles.textItems}>{item.name}</Text>
                    </View>
                  </View>

                </TouchableOpacity> }
            keyExtractor= { (item) => item.name}
            numColumns= {2}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textItems:{
      fontSize: 15,
      fontWeight: 'bold',
      marginHorizontal: 18,
  },
  figuras:{
    marginHorizontal: 20,
    height: 100,
    width:160,
    marginBottom:20,
    borderRadius:10,
    alignItems: 'center',
  },

});
