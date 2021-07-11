import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BusinessCard from './BusinessCard';

const BusinessesList = ({ title, price, data }) => {
  const businesses = data.filter((business) => business.price === price);

  const renderItem = ({ item }) => <BusinessCard item={item} />;

  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={businesses}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    marginBottom: 10,
  },
});

export default BusinessesList;
