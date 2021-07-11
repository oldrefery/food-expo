import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useBusinesses } from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

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
      <BusinessesList title={'Cost Effective'} price={'$'} data={businesses} />
      <BusinessesList title={'Bit Pricier'} price={'$$'} data={businesses} />
      <BusinessesList title={'Big Spender!'} price={'$$$'} data={businesses} />
    </View>
  );
};

export default SearchScreen;
