import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { images } from '../../constants';
import styles from './styles/styles';

const Header = ({ navigation, canGoBack = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {canGoBack ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        ) : (
          <Image source={images.logo} style={styles.avatar} />
        )}
      </View>

      <Text style={styles.title}>CineVault</Text>
    </View>
  );
};

export default Header;
