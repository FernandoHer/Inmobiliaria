/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface Props {
    data: any[],
    funOnChange: <K extends Object>( value: K, field: string ) => void,
    name:string,
}


export const CustomFlatList = ({data, funOnChange, name}:Props) => {
    const [isSelected, setIsSelected] = useState('');
    return (
        <FlatList
            data= { data }
            renderItem= { ({item}) =>
                <TouchableOpacity
                    onPress={()=> {
                        funOnChange( item.name, name);
                        setIsSelected(item.name);
                    }}
                >
                <View style={{backgroundColor: (item.name === isSelected) ? 'red' : 'white' } }>
                    <Text style={styles.textItems}>{item.name}</Text>
                </View>

                </TouchableOpacity> }
            keyExtractor= { (item) => item.name}
            horizontal= {true}
        />
    );
};


const styles = StyleSheet.create({
    textItems:{
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 18,
    },
});
