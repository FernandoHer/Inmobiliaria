/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, Platform, StyleSheet, Button, TouchableOpacity} from 'react-native';

import { ChosePropiety } from '../components/ChosePropiety';
import CheckBox from '@react-native-community/checkbox';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { CustomDropdown } from '../customComponents/CustomDropdown';
import { comision, ubicacion } from '../data/appData';

import { useForm } from '../hooks/useForms';
import { dataIcon } from '../data/dataIcon';


interface Props extends StackScreenProps<any,any> {}

export const HomeScreen = ({navigation}:Props) => {
  const { theme } = useContext(ThemeContext);
  const [primerMes, setPrimerMes] = useState(false);
  const [temporal, setTemporal] = useState(false);


  const checkValueTemporal = (value:boolean) =>{
    setTemporal(value);
    onChange(value, 'temporal');
  };
  const checkValueFirst = (value:boolean) =>{
    setPrimerMes(value);
    onChange(value, 'primerMes');
  };

  const { form, onChange} = useForm({
    comision: '',
    ubicacion: '',
    primerMes: '',
    temporal: '',
    propiedad: '',
});

  return (

    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>

            <View style={styles.header}>
            <TouchableOpacity
                onPress={()=> navigation.pop()}
            >
              <Text style={styles.return}>Atrás</Text>
            </TouchableOpacity>
              <Text style={styles.title}>Crear Propiedad</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity>
                 <Text style={styles.title1}>Venta</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.title1}>Alquiler</Text>
              </TouchableOpacity>
            </View>

            <ChosePropiety
              data= {dataIcon}
              name= "propiedad"
              funOnChange={(a) => onChange(a, 'propiedad')}
            />

          {/* Comisión */}

          <View style={styles.dropDown}>
              <Text style={styles.textOptions}>% Comisión</Text>
              <View>
                <CustomDropdown
                    name= "comision"
                    labelf="label"
                    valuef="valor"
                    funOnChange={(a) => onChange(a,'comision')}
                    data={comision}
                    isFocus
                />
            </View>
          </View>

          {/* Primer Mes */}
          <View style={styles.switchRow}>
            <Text style={{
                ...styles.switchText,
                color:theme.colors.text,
            }}>1er Mes</Text>
            <CheckBox
              disabled={false}
              value={primerMes}
              onValueChange={((value) => checkValueFirst(value) ) }
            />
        </View>

        {/* Temporal */}
        <View style={styles.switchRow}>
            <Text style={{
                ...styles.switchText,
                color:theme.colors.text,
            }}>temporal</Text>
            <CheckBox
              disabled={false}
              value={temporal}
              onValueChange={((valueTempo) => checkValueTemporal(valueTempo) ) }
            />

        </View>
          {/* Ubicación */}

          <View style={styles.dropDown}>
              <Text style={styles.textOptions}>Ubicación</Text>
              <View>
                <CustomDropdown
                    name= "ubicacion"
                    labelf="label"
                    valuef="valor"
                    funOnChange={(a) => onChange(a,'ubicacion')}
                    data={ubicacion}
                    isFocus
                />
            </View>
          </View>
          <Button
              title="Siguiente"
              onPress= {() => navigation.navigate('HouseDetail')}
            />
          <HeaderTitle title={ JSON.stringify( form, null, 3)}/>
        </ScrollView>
      </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
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
  title1:{
    marginHorizontal:50,
    marginTop: 20,
    color: 'grey',
    fontSize: 22,
  },
  globalMargin: {
    marginHorizontal: 20,
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
  switchRow:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 8,
  },
  switchText:{
      fontSize: 16,
  },
});


