import React from 'react';
import { Text, View } from 'react-native';

const BusinessDetailShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  return (
    <View>
      <Text>{id} Business Detail Show Screen</Text>
    </View>
  );
};

export default BusinessDetailShowScreen;
