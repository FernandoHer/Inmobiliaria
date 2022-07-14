/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Button, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomDropdown } from '../customComponents/CustomDropdown';
import { CustomFlatList } from '../customComponents/CustomFlatList';
import { CustomTextInput } from '../customComponents/CustomTextInput';
import { data, menuItems, meters, suelo, vias } from '../data/appData';
import { useForm } from '../hooks/useForms';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any> {}

export const CreateProperty = ({navigation}:Props) => {

    const { form, onChange} = useForm({
      antiguedad: '',
      precio: '',
      usoDeSuelo: '',
      nParqueaderos: '',
      metraje: '',
      altura: '',
      frente: '',
      viasDeAcceso : '',
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
            <Text style={{ fontSize:20, fontWeight:'bold', marginTop:20 }}>Comercial/Industrial</Text>
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

          {/* Uso de Suelo */}

          <View style={stylesInput.optionsStyle}>
            <View style={{width:170}}>
              <Text style={stylesInput.textOptions}>Uso de Suelo</Text>
            </View>
            <View>
              <CustomDropdown
                  name= "usoDeSuelo"
                  labelf="label"
                  valuef="valor"
                  funOnChange={(a) => onChange(a,'usoDeSuelo')}
                  data={suelo}
                  isFocus
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

          {/* Altura */}

          <View style={stylesInput.optionsStyle}>
            <View style={{width:250}}>
              <Text style={stylesInput.textOptions}>Altura</Text>
            </View>
            <View>
              <CustomTextInput
                funOnChange={(a) => onChange(a,'altura')}
                name="altura"
              />
            </View>
          </View>

          {/* Frente */}

          <View style={stylesInput.optionsStyle}>
            <View style={{width:250}}>
              <Text style={stylesInput.textOptions}>Frente </Text>
            </View>
            <View>
              <CustomTextInput
                funOnChange={(a) => onChange(a,'frente')}
                name="frente"
              />
            </View>
          </View>

           {/* Vias de Acceso */}

           <View style={stylesInput.dropDown}>
            <Text style={stylesInput.textOptions}>Vias de Acceso</Text>
            <View>
            <CustomDropdown
                    name= "viasDeAcceso"
                    labelf="label"
                    valuef="valor"
                    funOnChange={(a) => onChange(a,'viasDeAcceso')}
                    data={vias}
                    isFocus
                />
            </View>
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

