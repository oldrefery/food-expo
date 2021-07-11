import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import BusinessCard from './BusinessCard';

const BusinessesList = ({ title, data, navigation }) => {
  const handlePressCard = (item) => {
    navigation.navigate('BusinessDetail', { id: item.id });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handlePressCard(item)}>
      <BusinessCard item={item} />
    </Pressable>
  );

  const keyExtractor = (item) => item.id;

  if (data.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
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

export default withNavigation(BusinessesList);
