/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
    name:string,
    data:any[],
    funOnChange: <K extends Object>( value: K, field: string ) => void,
    labelf: string,
    valuef: string,
    isFocus: boolean
}


export const CustomDropdown = ({name, funOnChange, valuef, labelf, data, isFocus}:Props) => {


  return (
    <View>

      <Dropdown
        style={stylesInput.dropdown}
        placeholderStyle={stylesInput.placeholderStyle}
        selectedTextStyle={stylesInput.selectedTextStyle}
        inputSearchStyle={stylesInput.inputSearchStyle}
        iconStyle={stylesInput.iconStyle}
        data={data}
        search
        maxHeight={150}
        labelField= {labelf}
        valueField={valuef}
        placeholder=""
        searchPlaceholder="Search..."
        onChange={(valor) => funOnChange( valor, name)}
        renderLeftIcon={() => (
            <AntDesign
            style={stylesInput.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
            />
        )}
    />
    </View>
  );
};


const stylesInput = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 35,
      width: 240,
      flex: 1,
      borderWidth: 1,
      borderColor:'grey',
      color:'black',
      // borderBottomColor: 'gray',
      // borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    textItems:{
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 18,
  },
});

