import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import yelp from '../api/yelp';

const BusinessDetailShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [businessDetail, setBusinessDetail] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getBusinessDetail(id);
  }, []);

  const getBusinessDetail = (id) => {
    yelp
      .get(`/${id}`)
      .then((res) => setBusinessDetail(res.data))
      .catch((e) => setErrorMessage(e.message));
  };

  return (
    <View>
      <Text>Business Detail Show Screen</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {businessDetail && <Text>{businessDetail.name}</Text>}
    </View>
  );
};

export default BusinessDetailShowScreen;
