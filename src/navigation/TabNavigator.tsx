import React, { createRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { HomeNavigator, FavouriteNavigator } from '../navigation';
import { colors } from '../constants';

const Tab = createBottomTabNavigator();

export const navigationRef = createRef();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Georgia',
          fontWeight: 300,
          color: colors.label,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={colors.label}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteNavigator"
        component={FavouriteNavigator}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              size={25}
              color={colors.label}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
