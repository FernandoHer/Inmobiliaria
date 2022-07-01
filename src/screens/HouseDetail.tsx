/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */


import React, { useContext }  from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DropdownComponent from '../components/Dropdown';
import { HeaderTitle } from '../components/HeaderTitle';
import { RadioButton } from '../components/RadioButtom';
import { ThemeContext } from '../context/themeContext/ThemeContext';

import { useForm } from '../hooks/useForms';




export const HouseDetail = () => {


  const {theme} = useContext(ThemeContext);
  const { form, onChange} = useForm({
        antiguedad: '',
        precio: '',
        nCuartos: '',
        nBanos: '',
        nParqueaderos: '',
        metraje: '',
        petFrendly: '',
        conjunto: '',
  });


  return (
    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>

        <View >

            <View style={stylesInput.header}>
              <Text style={stylesInput.return}>Atrás</Text>
              <Text style={stylesInput.title}>Crear Propiedad</Text>
            </View>


            <View style={{alignItems:'center'}}>
              <Text style={{ fontSize:20, fontWeight:'bold', marginTop:20 }}>Vivienda</Text>
            </View>


            <View style={stylesInput.dropDown}>
                <Text style={stylesInput.textOptions}>Antiguedad</Text>
                <DropdownComponent/>
            </View>


            <View style={stylesInput.priceStyle}>
              <Text style={stylesInput.textOptions}>Precio (USD)</Text>
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
                  onChangeText={(value) => onChange( value, 'precio')}
              />
            </View>


            <View style={stylesInput.optionsStyle}>
              <View style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Cuartos</Text>
              </View>
              <RadioButton/>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View  style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Baños</Text>
              </View>

              <RadioButton/>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View  style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Parqueaderos</Text>
              </View>

              <RadioButton/>
            </View>

            <View style={stylesInput.dropDown}>
              <Text style={stylesInput.textOptions}>Metraje</Text>
              <DropdownComponent/>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View style={{width:250}}>
                <Text style={stylesInput.textOptions}>Pet Friendly</Text>
              </View>
              <RadioButton/>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View style={{width:250}}>
                <Text style={stylesInput.textOptions}>Dentro de Urbanización / Conjunto </Text>
              </View>
              <RadioButton/>
            </View>

            <Button
              title="Siguiente"
              onPress= {() => console.log('hola mundo')}
            />

            <HeaderTitle title={ JSON.stringify( form, null, 3)}/>
        </View>
      </ScrollView>

    </KeyboardAvoidingView>

  );
};

const stylesInput = StyleSheet.create({
    header:{
      height:80,
      backgroundColor: 'blue',
      flexDirection: 'row',
      alignItems: 'center',
    },
    return:{
      marginHorizontal: 20,
      fontSize: 16,
      color: 'white',
    },
    title:{
      marginLeft: 50,
      color: 'white',
      fontSize: 22,
    },
    container:{
      width:100,
      height:50,
    },
    textOptions:{
      marginHorizontal:20,
      fontSize: 18,
      fontWeight: '500',
    },
    inputStyles:{
        borderWidth: 1,
        fontSize:20,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 0,
        marginVertical: 8,
    },
    switchRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    switchText:{
        fontSize: 25,
    },
    dropDown:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',
    },
    priceStyle:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'center',
    },
    optionsStyle:{
      flexDirection:'row',
      alignItems: 'center',
      marginTop: 25,
    },
});

