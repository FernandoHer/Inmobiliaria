/* eslint-disable prettier/prettier */

interface MenuItem {
    name: string,
    icon: string,
    component: string,
}

export const propietyData: MenuItem[] = [
    {
        name: 'Home',
        icon: 'cube-outline',
        component: 'HomeScreen',
    },
    {
        name: 'Casa',
        icon: 'albums-outline',
        component: 'CreateProperty',
    },
];
