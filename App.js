import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultsScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);