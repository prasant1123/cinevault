import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardData } from '../services/types';
import { Dashboard, DetailsScreen, FavouriteScreen } from '../screens';

export type HomeStackParamList = {
  Dashboard: undefined;
  DetailsScreen: {
    item: DashboardData;
  };
  FavouriteScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
    </Stack.Navigator>
  );
}
