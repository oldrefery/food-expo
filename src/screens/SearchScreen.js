import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const LOCATION = 'New York City';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [businesses, setBusinesses] = useState([]);

  const searchApi = () => {
    console.log('searchApi was invoked');
    yelp
      .get('/search', {
        params: {
          location: LOCATION,
          limit: 50,
          term: searchText,
        },
      })
      .then((res) => {
        setBusinesses(res.data?.businesses || []);
      })
      .catch((e) => console.log(e));
  };

  const handleChangeSearchText = (newValue) => {
    setSearchText(newValue);
  };

  const handleSubmitSearch = () => {
    searchApi();
  };

  return (
    <View>
      <SearchBar
        searchText={searchText}
        onChangeSearchText={handleChangeSearchText}
        onSearchTextSubmit={handleSubmitSearch}
      />
      <Text>We have found {businesses.length} results</Text>
    </View>
  );
};

export default SearchScreen;
