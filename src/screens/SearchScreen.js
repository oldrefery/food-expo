import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useBusinesses } from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

const SearchScreen = () => {
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
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={handleChangeSearchText}
        onSearchTextSubmit={handleSubmitSearch}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={styles.scrollContainer}>
        <BusinessesList
          title={'Cost Effective'}
          data={filterResultsByPrice('$')}
        />
        <BusinessesList
          title={'Bit Pricier'}
          data={filterResultsByPrice('$$')}
        />
        <BusinessesList
          title={'Big Spender!'}
          data={filterResultsByPrice('$$$')}
        />
        <BusinessesList
          title={'The most expensive!'}
          data={filterResultsByPrice('$$$$')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
