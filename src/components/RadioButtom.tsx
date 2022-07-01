/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const menuItems = [
    {
        name: '1',
    },
    {
        name: '2',
    },
    {
        name: '3',
    },
    {
        name: '4',
    },
    {
        name: '+',
    },
];



export const RadioButton = () => {

  return (
    <View>
        <FlatList
            data= { menuItems }
            renderItem= { ({item}) =>
                <TouchableOpacity
                    onPress={()=> console.log(item.name)}
                >
                    <Text style={styles.textItems}>{item.name}</Text>
                </TouchableOpacity> }
            keyExtractor= { (item) => item.name}
            horizontal= {true}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    textItems:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:30,
    },
});

