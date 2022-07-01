/* eslint-disable prettier/prettier */

import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState } from 'react-native';
import { themeReducer, ThemeState, darkTheme, lightTheme } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLigthTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) =>{

    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme) );

    useEffect(() => {
      AppState.addEventListener( 'change', (status) => {
        if (status === 'active') {
            (Appearance.getColorScheme() === 'light')
                ? setLigthTheme()
                : setDarkTheme();
        }
      });
    }, []);


    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme' });
        console.log('setDarkTheme');
    };
    const setLigthTheme = () => {
        dispatch({type: 'set_light_theme' });
        console.log('setLigthTheme');
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLigthTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};
