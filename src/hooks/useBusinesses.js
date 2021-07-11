import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const LOCATION = 'New York City';

export const useBusinesses = (searchText) => {
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

  return [searchApi, businesses, errorMessage];
};
