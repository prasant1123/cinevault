import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const SearchBar = ({
  value,
  onChangeText,
  placeholder = 'Search for shows, movies...',
}: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color="#777" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#777"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 14,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});
