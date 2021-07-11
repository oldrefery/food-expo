import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const BusinessCard = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.image_url,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.info}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  info: {
    color: 'darkgrey',
  },
});

export default BusinessCard;
