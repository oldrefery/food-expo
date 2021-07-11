import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const LOCATION = 'New York City';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi(searchText);
  }, []);

  const searchApi = (term) => {
    yelp
      .get('/search', {
        params: {
          location: LOCATION,
          limit: 50,
          term,
        },
      })
      .then((res) => {
        setBusinesses(res.data?.businesses || []);
        setErrorMessage('');
      })
      .catch((e) => setErrorMessage(e.message));
  };

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
