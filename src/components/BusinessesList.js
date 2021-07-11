import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BusinessesList = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
      <View style={styles.cards} />
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    height: 100,
    width: 200,
  },
});

export default BusinessesList;
