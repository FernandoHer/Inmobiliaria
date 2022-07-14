/* eslint-disable prettier/prettier */

import { ImageSourcePropType } from 'react-native';


export interface MenuItem {
    name: string,
    icon: string,
    component: string,
}

export interface Casas {
    casa: string;
    data: string[];
}

export interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}
