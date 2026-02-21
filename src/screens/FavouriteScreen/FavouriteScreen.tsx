import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FavStackParamList } from '../../navigation/FavouriteNavigator';

import { useAppSelector } from '../../app/hooks';
import styles from './styles/styles';
import { Header, ListComponent } from '../../components';

type Props = NativeStackScreenProps<FavStackParamList, 'FavouriteScreen'>;
const FavouriteScreen = ({ navigation }: Props) => {
  const favorites = useAppSelector(state => state.favorites.items);
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ListComponent data={favorites} navigation={navigation} />
      </View>
    </>
  );
};
export default FavouriteScreen;
