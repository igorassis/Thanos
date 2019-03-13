import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/screens/Home/Home';
import Friends from './components/screens/Friends/Friends';
import BLE from './components/screens/BLE/BLE';

const MainNavigator = createStackNavigator({
    Home: { screen: Home },
    Friends: { screen: Friends },
    BLE: { screen: BLE }
  });

const AppNavigator = createAppContainer(MainNavigator);
  
export default AppNavigator;
