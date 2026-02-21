import React from 'react';
import {
  FlatList,
  View,
  Text,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { images } from '../../constants';
import { HomeStackParamList } from '../../navigation/HomeNavigator';
import { DashboardData } from '../../services/types';
import styles from './styles/styles';
import { LoadingScreen } from '../../components';

type NavigationProp = NativeStackScreenProps<HomeStackParamList>;

type ListComponentProps = {
  data: DashboardData[];
  navigation: NavigationProp;
  emptyText?: string;
  onEndReached?: () => void;
  hasMore?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
};

const ListComponent = ({
  data = [],
  navigation,
  emptyText = 'No items available',
  onEndReached,
  hasMore,
  refreshing,
  onRefresh,
}: ListComponentProps) => {
  const renderItem: ListRenderItem<DashboardData> = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate('HomeTab', {
            screen: 'DetailsScreen',
            params: {
              item,
            },
          })
        }
      >
        <Image
          source={{
            uri: item.primaryImage,
          }}
          style={styles.poster}
        />
        <Text style={styles.title}>{item.originalTitle}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListFooterComponent={hasMore ? <LoadingScreen /> : null}
      ListEmptyComponent={<Text style={styles.emptyText}>{emptyText}</Text>}
    />
  );
};
export default ListComponent;
