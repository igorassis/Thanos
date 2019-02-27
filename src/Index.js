import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/screens/Home/Home';
import Friends from './components/screens/Friends/Friends';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Friends: { screen: Friends }
  });

const AppNavigator = createAppContainer(MainNavigator);
  
export default AppNavigator;