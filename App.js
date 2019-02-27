import React from 'react';
import { Provider as StoreProvider} from 'react-redux';
import store from './src/components/store/Index';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/Index';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={}
  }

  render() {
    return (
      <StoreProvider store={ store }>
        <AppNavigator />
      </StoreProvider> 
    );
  }
}
