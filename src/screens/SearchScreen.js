import React, { useState } from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (newValue) => {
    setSearchText(newValue);
  };

  return (
    <View>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={handleChangeSearchText}
      />
    </View>
  );
};

export default SearchScreen;
