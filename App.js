import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/scenes/home';
import GuideScreen from './src/scenes/guide';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Guide: GuideScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
