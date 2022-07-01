/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */


import React, { useContext, useState }  from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useForm } from '../hooks/useForms';

const data = [
  { label: '1 Año', valor: '1' },
  { label: '2 Años', valor: '2' },
  { label: '3 Años', valor: '3' },
  { label: '4 Años', valor: '4' },
  { label: '5 Años', valor: '5' },
  { label: '6 Años', valor: '6' },
  { label: '7 Años', valor: '7' },
  { label: '8 Años', valor: '8' },
  ];

  const meters = [
    { label: '100 mts', valor: '100' },
    { label: '200 mts', valor: '200' },
    { label: '300 mts', valor: '300' },
    { label: '300 mts', valor: '400' },
    { label: '500 mts', valor: '500' },
    { label: '600 mts', valor: '600' },
    { label: '700 mts', valor: '700' },
    { label: '800 mts', valor: '800' },
    ];

    const menuItems = [
      { name: '1' },
      { name: '2' },
      { name: '3' },
      { name: '4' },
      { name: '+' },
    ];

  const menuYes = [
    { name: 'Si' },
    { name: 'No' },
  ];




export const HomeScreen = () => {

  const [isSelectedCuartos, setIsSelectedCuartos] = useState('');
  const [isSelectedBanos, setIsSelectedBanos] = useState('');
  const [isSelectedParqueaderos, setIsSelectedParqueaderos] = useState('');
  const [isSelectedPetFrendly, setIsSelectedPetFrendly] = useState('');
  const [isSelectedUrbans, setIsSelectedUrbans] = useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
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
              <Text style={stylesInput.title}>Crear Propiedad 1</Text>
            </View>


            <View style={{alignItems:'center'}}>
              <Text style={{ fontSize:20, fontWeight:'bold', marginTop:20 }}>Vivienda</Text>
            </View>


            <View style={stylesInput.dropDown}>
                <Text style={stylesInput.textOptions}>Antiguedad</Text>
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
                      labelField="label"
                      valueField="valor"
                      placeholder=""
                      searchPlaceholder="Search..."
                      value={value}
                      onChange={(valor) => onChange( valor, 'antiguedad')}
                      renderLeftIcon={() => (
                          <AntDesign
                          style={stylesInput.icon}
                          color={isFocus ? 'blue' : 'black'}
                          name="Safety"
                          size={20}
                          />
                      )}
                  />
                  <Text> {value} </Text>
              </View>
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
                  keyboardType="numeric"
                  onChangeText={(precio) => onChange( precio, 'precio')}
              />
            </View>


            <View style={stylesInput.optionsStyle}>
              <View style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Cuartos</Text>
              </View>
              <View>
                <FlatList
                    data= { menuItems }
                    renderItem= { ({item}) =>
                        <TouchableOpacity
                            onPress={()=> {
                              onChange( item.name, 'nCuartos');
                              setIsSelectedCuartos(item.name);
                            }}
                        >
                          <View style={{backgroundColor: (item.name === isSelectedCuartos) ? 'red' : 'white' } }>
                            <Text style={stylesInput.textItems}>{item.name}</Text>
                          </View>

                        </TouchableOpacity> }
                    keyExtractor= { (item) => item.name}
                    horizontal= {true}
                />
              </View>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View  style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Baños</Text>
              </View>
              <View>
                <FlatList
                    data= { menuItems }
                    renderItem= { ({item}) =>
                        <TouchableOpacity
                            onPress={()=>{ 
                              onChange( item.name, 'nBanos'),
                              setIsSelectedBanos(item.name);
                            }}
                        >
                          <View style={{backgroundColor: (item.name === isSelectedBanos) ? 'red' : 'white' } }>
                            <Text style={stylesInput.textItems}>{item.name}</Text>
                          </View>

                        </TouchableOpacity> }
                    keyExtractor= { (item) => item.name}
                    horizontal= {true}
                />
              </View>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View  style={{width:170}}>
                <Text style={stylesInput.textOptions}>N Parqueaderos</Text>
              </View>
              <View>
                <FlatList
                    data= { menuItems }
                    renderItem= { ({item}) =>
                        <TouchableOpacity
                            onPress={()=> {
                              onChange( item.name, 'nParqueaderos');
                              setIsSelectedParqueaderos(item.name);
                            }}
                        >
                          <View style={{backgroundColor: (item.name === isSelectedParqueaderos) ? 'red' : 'white' } }>
                            <Text style={stylesInput.textItems}>{item.name}</Text>
                          </View>

                        </TouchableOpacity> }
                    keyExtractor= { (item) => item.name}
                    horizontal= {true}
                />
              </View>
            </View>

            <View style={stylesInput.dropDown}>
              <Text style={stylesInput.textOptions}>Metraje</Text>
              <View>
                  <Dropdown
                      style={stylesInput.dropdown}
                      placeholderStyle={stylesInput.placeholderStyle}
                      selectedTextStyle={stylesInput.selectedTextStyle}
                      inputSearchStyle={stylesInput.inputSearchStyle}
                      iconStyle={stylesInput.iconStyle}
                      data={meters}
                      search
                      maxHeight={150}
                      labelField="label"
                      valueField="valor"
                      placeholder=""
                      searchPlaceholder="Search..."
                      value={value}
                      onChange={(valor) => onChange( valor, 'metraje')}
                      renderLeftIcon={() => (
                          <AntDesign
                          style={stylesInput.icon}
                          color={isFocus ? 'blue' : 'black'}
                          name="Safety"
                          size={20}
                          />
                      )}
                  />
                  <Text> {value} </Text>
              </View>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View style={{width:250}}>
                <Text style={stylesInput.textOptions}>Pet Friendly</Text>
              </View>
              <View>
                <FlatList
                    data= { menuYes }
                    renderItem= { ({item}) =>
                        <TouchableOpacity
                            onPress={()=> {
                              onChange( item.name, 'petFrendly');
                              setIsSelectedPetFrendly(item.name);
                            }}
                        >
                          <View style={{backgroundColor: (item.name === isSelectedPetFrendly) ? 'red' : 'white' } }>
                            <Text style={stylesInput.textItems}>{item.name}</Text>
                          </View>
                        </TouchableOpacity> }
                    keyExtractor= { (item) => item.name}
                    horizontal= {true}
                />
              </View>
            </View>

            <View style={stylesInput.optionsStyle}>
              <View style={{width:250}}>
                <Text style={stylesInput.textOptions}>Dentro de Urbanización / Conjunto </Text>
              </View>
              <View>
                <FlatList
                    data= { menuYes }
                    renderItem= { ({item}) =>
                        <TouchableOpacity
                            onPress={()=> {
                              onChange( item.name, 'conjunto');
                              setIsSelectedUrbans(item.name);
                            }}
                        >
                           <View style={{backgroundColor: (item.name === isSelectedUrbans) ? 'red' : 'white' } }>
                            <Text style={stylesInput.textItems}>{item.name}</Text>
                           </View>

                        </TouchableOpacity> }
                    keyExtractor= { (item) => item.name}
                    horizontal= {true}
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

