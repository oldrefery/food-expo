import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const BusinessCard = ({ item }) => {
  // console.log('item', item);
  return (
    <View style={styles.cardContainer}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: item.image_url,
        }}
      />
      <Text>{item.name}</Text>
      <Text>Rating {item.rating}</Text>
      <Text>Price: {item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
  },
});

export default BusinessCard;
