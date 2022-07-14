/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React, { useContext } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    funOnChange: <K extends Object>( value: K, field: string ) => void,
    name:string,
}


export const CustomTextInput = ({funOnChange, name}:Props) => {
    const {theme} = useContext(ThemeContext);

  return (
    <TextInput
                  style = {{
                    flex: 1,
                    ...stylesInput.inputStyles,
                    height: 40,
                    color: theme.colors.text,
                    borderColor: theme.colors.border,
                  }}
                  placeholder = "Valor"
                  placeholderTextColor={theme.divideColor}
                  autoCorrect = { false }
                  autoCapitalize = "words"
                  keyboardType="numeric"
                  onChangeText={(valor) => funOnChange( valor, name)}
              />
  );
};


const stylesInput = StyleSheet.create({
    inputStyles:{
        borderWidth: 1,
        fontSize:20,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 0,
        marginVertical: 8,
    },
});

