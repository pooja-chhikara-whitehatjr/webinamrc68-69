  
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Transaction from "./screens/transaction";
import Search from "./screens/search";

export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: Transaction },
  Search: { screen: Search }
});

const AppContainer = createAppContainer(TabNavigator);