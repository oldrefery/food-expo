import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import BusinessDetailShowScreen from './src/screens/BusinessDetailShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BusinessDetail: BusinessDetailShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
