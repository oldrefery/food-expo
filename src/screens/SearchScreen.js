import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useBusinesses } from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    return businesses.filter((business) => business.price === price);
  };

  const handleChangeSearchText = (newValue) => {
    setSearchText(newValue);
  };

  const handleSubmitSearch = () => {
    searchApi(searchText);
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={handleChangeSearchText}
        onSearchTextSubmit={handleSubmitSearch}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessesList
          navigation={navigation}
          title={'Cost Effective'}
          data={filterResultsByPrice('$')}
        />
        <BusinessesList
          navigation={navigation}
          title={'Bit Pricier'}
          data={filterResultsByPrice('$$')}
        />
        <BusinessesList
          navigation={navigation}
          title={'Big Spender!'}
          data={filterResultsByPrice('$$$')}
        />
        <BusinessesList
          navigation={navigation}
          title={'The most expensive!'}
          data={filterResultsByPrice('$$$$')}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
