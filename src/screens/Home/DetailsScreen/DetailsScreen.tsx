import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addFavorite, removeFavorite } from '../../../services/favoritesSlice';
import type { DashboardData } from '../../../services/types';

import { HomeStackParamList } from '../../../navigation/HomeNavigator';
import styles from './styles/styles';
import { Header, TrailerPlayer } from '../../../components';

type Props = NativeStackScreenProps<HomeStackParamList, 'DetailsScreen'>;

const DetailsScreen = ({ navigation, route }: Props) => {
  const { item } = route.params;
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.items);

  const isFavorite = favorites.some(f => f.id === item.id);

  const onToggleFavorite = () => {
    if (isFavorite) dispatch(removeFavorite(item.id));
    else dispatch(addFavorite(item));
  };
  return (
    <>
      <Header navigation={navigation} canGoBack={true} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.faviorateRow}>
            <Text style={styles.title}>{item.originalTitle}</Text>
            <TouchableOpacity onPress={onToggleFavorite}>
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={22}
                color={'#ff5a5f'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#f5c518" />
            <Text style={styles.ratingText}> {item.averageRating}</Text>
            <Text style={styles.releaseDateText}>{item.startYear}</Text>
          </View>
        </View>
        <View style={styles.midContainer}>
          <Image
            source={{
              uri: item.primaryImage,
            }}
            style={styles.poster}
          />

          <View style={styles.textContainer}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
        <TrailerPlayer url={item.trailer} />
      </View>
    </>
  );
};
export default DetailsScreen;
