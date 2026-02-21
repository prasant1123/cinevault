import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles/Styles';
import { colors } from '../../constants';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.text} />
    </View>
  );
};

export default LoadingScreen;
