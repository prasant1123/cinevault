import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardData } from '../services/types';
import { FavouriteScreen } from '../screens';

export type FavStackParamList = {
  FavouriteScreen: undefined;
};

const Stack = createNativeStackNavigator<FavStackParamList>();

export default function FavouriteNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
    </Stack.Navigator>
  );
}
