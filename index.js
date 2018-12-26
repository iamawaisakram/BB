import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';

//Pages
import Main from './pages/Main';
import Signup from './pages/Signup';

class App extends Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent(appName, () => App);

const RootStack = createStackNavigator(
  {
    Main: Main,
    Signup: Signup
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main'
  }
);
