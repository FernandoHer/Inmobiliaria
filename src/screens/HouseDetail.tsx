/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */


import React  from 'react';
import {  View, StyleSheet, KeyboardAvoidingView, Platform, Text, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForms';
import { data, menuItems, menuYes, meters } from '../data/appData';
import { CustomDropdown } from '../customComponents/CustomDropdown';
import { CustomFlatList } from '../customComponents/CustomFlatList';
import { CustomTextInput } from '../customComponents/CustomTextInput';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any,any> {}



export const HouseDetail = ({navigation}:Props) => {

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
            <TouchableOpacity
                onPress={()=> navigation.pop()}
            >
              <Text style={stylesInput.return}>Atrás</Text>
            </TouchableOpacity>
              <Text style={stylesInput.title}>Crear Propiedad</Text>
            </View>


            <View style={{alignItems:'center'}}>
              <Text style={{ fontSize:20, fontWeight:'bold', marginTop:20 }}>Vivienda</Text>
            </View>

            {/* Antiguedad */}

            <View style={stylesInput.dropDown}>
                <Text style={stylesInput.textOptions}>Antiguedad</Text>
                <View>
                  <CustomDropdown
                      name= "antiguedad"
                      labelf="label"
                      valuef="valor"
                      funOnChange={(a) => onChange(a,'antiguedad')}
                      data={data}
                      isFocus
                  />
              </View>
            </View>

            {/* Precio del Inmueble */}

            <View style={stylesInput.priceStyle}>
              <Text style={stylesInput.textOptions}>Precio (USD)</Text>
              <CustomTextInput
                funOnChange={(a) => onChange(a,'precio')}
                name="precio"
              />
            </View>

            {/* Número de Cuartos */}

            <View style={stylesInput.optionsStyle}>
              <View style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Cuartos</Text>
              </View>
              <View>
                <CustomFlatList
                  data = {menuItems}
                  name = "nCuartos"
                  funOnChange={(a) => onChange(a, 'nCuartos')}
                />
              </View>
            </View>

            {/* Número de Baños */}

            <View style={stylesInput.optionsStyle}>
              <View  style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Baños</Text>
              </View>
              <View>
                <CustomFlatList
                  data = {menuItems}
                  name = "nBanos"
                  funOnChange={(a) => onChange(a, 'nBanos')}
                />
              </View>
            </View>

            {/* Número de Parqueaderos */}

            <View style={stylesInput.optionsStyle}>
              <View  style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Parqueaderos</Text>
              </View>
              <View>
                <CustomFlatList
                    data = {menuItems}
                    name = "nParqueaderos"
                    funOnChange={(a) => onChange(a, 'nParqueaderos')}
                  />
              </View>
            </View>

            {/* Número de metros */}

            <View style={stylesInput.dropDown}>
              <Text style={stylesInput.textOptions}>Metraje</Text>
              <View>
              <CustomDropdown
                      name= "metraje"
                      labelf="label"
                      valuef="valor"
                      funOnChange={(a) => onChange(a,'metraje')}
                      data={meters}
                      isFocus
                  />
              </View>
            </View>

            {/* Pet Frendly */}

            <View style={stylesInput.optionsStyle}>
              <View style={{width:250}}>
                <Text style={stylesInput.textOptions}>Pet Friendly</Text>
              </View>
              <View>
                <CustomFlatList
                  data = {menuYes}
                  name = "petFrendly"
                  funOnChange={(a) => onChange(a, 'petFrendly')}
                />
              </View>
            </View>

            {/* Es urbanización */}

            <View style={stylesInput.optionsStyle}>
              <View style={{width:250}}>
                <Text style={stylesInput.textOptions}>Dentro de Urbanización / Conjunto </Text>
              </View>
              <View>
                <CustomFlatList
                  data = {menuYes}
                  name = "conjunto"
                  funOnChange={(a) => onChange(a, 'conjunto')}
                />
              </View>
            </View>

            <Button
              title="Siguiente"
              onPress= {() => navigation.navigate('CreateProperty')}
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
    textOptions:{
      marginHorizontal:20,
      fontSize: 18,
      fontWeight: '500',
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

