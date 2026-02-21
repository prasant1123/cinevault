import React, { useState, useMemo, useEffect } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../../../navigation/HomeNavigator';
import { useGetDashboardQuery } from '../../../services/dashboardApi';
import styles from './styles/styles';
import {
  Header,
  ListComponent,
  SearchBar,
  LoadingScreen,
} from '../../../components';

type Props = NativeStackScreenProps<HomeStackParamList, 'Dashboard'>;

const ITEMS_PER_PAGE = 20;

const Dashboard = ({ navigation }: Props) => {
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const { data = [], isLoading, isFetching, refetch } = useGetDashboardQuery();

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;

    return data.filter(item =>
      item.originalTitle.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, data]);

  const visibleData = useMemo(() => {
    return filteredData.slice(0, visibleCount);
  }, [filteredData, visibleCount]);

  const loadMore = () => {
    if (visibleCount < filteredData.length) {
      setVisibleCount(prev => prev + ITEMS_PER_PAGE);
    }
  };

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [search]);

  const handleRefresh = async () => {
    setVisibleCount(ITEMS_PER_PAGE);
    await refetch();
  };

  return (
    <>
      <Header navigation={navigation} />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View style={styles.container}>
          <SearchBar value={search} onChangeText={setSearch} />

          <ListComponent
            data={visibleData}
            navigation={navigation}
            onEndReached={loadMore}
            hasMore={visibleCount < filteredData.length}
            refreshing={isFetching && !isLoading}
            onRefresh={handleRefresh}
          />
        </View>
      )}
    </>
  );
};

export default Dashboard;
