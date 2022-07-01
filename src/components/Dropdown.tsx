/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
{ label: '1 Año', value: '1' },
{ label: '2 Años', value: '2' },
{ label: '3 Años', value: '3' },
{ label: '4 Años', value: '4' },
{ label: '5 Años', value: '5' },
{ label: '6 Años', value: '6' },
{ label: '7 Años', value: '7' },
{ label: '8 Años', value: '8' },
];

const DropdownComponent = () => {
const [value, setValue] = useState(null);
const [isFocus, setIsFocus] = useState(false);


return (
    <View>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={150}
            labelField="label"
            valueField="value"
            placeholder=""
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderLeftIcon={() => (
                <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
                />
            )}
        />
        <Text> {value} </Text>
    </View>

);
};

export default DropdownComponent;

const styles = StyleSheet.create({
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
});
