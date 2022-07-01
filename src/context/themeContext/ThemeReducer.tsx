/* eslint-disable prettier/prettier */


import { Theme } from '@react-navigation/native';


type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    divideColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    divideColor: 'rgba(0,0,0,0.3)',
    colors: {
        primary: '#5856D6',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
};

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    divideColor: 'rgba(255,255,255,0.5)',
    colors: {
        primary: '#555616',
        background: 'black',
        card: 'black',
        text: '#FFF',
        border: 'white',
        notification: 'teal',
    },
};

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme};
        case 'set_dark_theme':
            return {...darkTheme};
        default:
            return state;
    }
};
