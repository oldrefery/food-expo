import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useBusinesses } from '../hooks/useBusinesses';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const handleChangeSearchText = (newValue) => {
    setSearchText(newValue);
  };

  const handleSubmitSearch = () => {
    searchApi(searchText);
  };

  return (
    <View>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={handleChangeSearchText}
        onSearchTextSubmit={handleSubmitSearch}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {businesses.length} results</Text>
    </View>
  );
};

export default SearchScreen;
