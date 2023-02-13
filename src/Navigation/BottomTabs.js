import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    HomeNavigation,

    Cadastrar_MedNavigation,
    Editar_MedNavigation,
    Lista_MedNavigation,
    PerfilNavigation

    
} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function HomeNavigationTabs() {
    return (
        
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 }
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='home'
                                size={20}
                                color={focused ? '#7B68EE' : '#006400'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#7B68EE' : '#006400',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                             
                                Home
                            </Text>
                        </>
                    )
                }}
            />
            
             
            
            <Tab.Screen
                name="Editar_MedTab"
                component={Editar_MedNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Icon
                                name='address-card'
                                size={20}
                                color={focused ? '#7B68EE' : '#006400'}
                            />
                                                        <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#7B68EE' : '#006400',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                             
                                Sobre
                            </Text>
                        </>
                    )
                }}
            />
       <Tab.Screen
            name="PerfilNavigationTab"
            component={PerfilNavigation}
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Icon
                            name='user-circle'
                            size={20}
                            color={focused ? '#7B68EE' : '#006400'}
                        />
                        <Text
                            allowFontScaling={false}
                            style={{
                                color: focused ? '#7B68EE' : '#006400',
                                width: 50,
                                fontSize: 11,
                                textAlign: 'center'
                            }}>
                           
                           Perfil
                        </Text>
                    </>
                )
            }}
        />
        </Tab.Navigator>
    );
}