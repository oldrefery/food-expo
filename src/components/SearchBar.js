import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleChangeText = (newValue) => {
    setSearchText(newValue);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" style={styles.icon} />
      <TextInput
        placeholder={'Search'}
        value={searchText}
        onChangeText={handleChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    marginRight: 15,
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
