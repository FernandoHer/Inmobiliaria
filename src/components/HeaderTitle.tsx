/* eslint-disable prettier/prettier *//* eslint-disable react-native/no-inline-styles */

import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appThemes';

interface Props {
    title: string,
}

export const HeaderTitle = ({title}:Props) => {
    const { top } = useSafeAreaInsets();
    const { theme } = useContext( ThemeContext );
  return (
    <View style={{
        marginTop:top + 15,
        marginBottom: 20,
    }}>
        <Text style={{
          ...styles.title,
          color: theme.colors.primary,
          }}>
            {title}
          </Text>
    </View>
  );
};
