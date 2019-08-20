import HomeScreen from '../view/home';
import NoPage from '../view/no_page';
import { Icon } from 'react-native-elements';
import React from 'react'
import { createBottomTabNavigator } from "react-navigation";

export const homeNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen, navigationOptions: {tabBarIcon: <Icon name="home"></Icon>}}, 
  undefined: {screen: NoPage, navigationOptions: {tabBarIcon: <Icon name="any"></Icon>}},
  undefined_2: {screen: NoPage, navigationOptions: {tabBarIcon: <Icon name="any"></Icon>}},
  undefined_3: {screen: NoPage, navigationOptions: {tabBarIcon: <Icon name="any"></Icon>}},
  Configurações: {screen: NoPage, navigationOptions: {tabBarIcon: <Icon name="settings"></Icon>}}
})
