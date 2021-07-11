import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const BusinessDetailShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [businessDetail, setBusinessDetail] = useState(null);
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

  if (!businessDetail) {
    return <Text>{errorMessage}</Text>;
  }

  const renderItem = ({ item }) => (
    <Image key={item} source={{ uri: item }} style={styles.image} />
  );

  const keyExtractor = (item) => item;

  return (
    <View>
      <Text>Business Detail Show Screen</Text>
      <Text>{businessDetail.name}</Text>
      <FlatList
        data={businessDetail.photos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginTop: 15,
    alignSelf: 'center',
  },
});

export default BusinessDetailShowScreen;
