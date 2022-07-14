/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/AppInterfaces';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem,
}


export const FlatListMenuItem = ({menuItem}:Props) => {

  const navigation = useNavigation();
  const { theme } = useContext( ThemeContext );

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress = {() => navigation.navigate( menuItem.component as any )}
    >
      <View style={styles.container}>
        <Icon
          name= {menuItem.icon}
          size= {23}
          color= { theme.colors.primary}
        />
        <Text style={{
            ...styles.itemText,
            color: theme.colors.text,
            }}>{menuItem.name}</Text>

        <Icon
          name= "chevron-forward-outline"
          size= {23}
          color= { theme.colors.primary }
        />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  itemText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 19,
    fontWeight: 'bold',
  },

});

