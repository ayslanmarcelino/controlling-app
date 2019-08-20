import HomeScreen from '../view/home';
import { Icon } from 'react-native-elements';
import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

export const homeNavigator = createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen, navigationOptions: {tabBarIcon: <Icon name="home"></Icon>}}, 
  undefined: {screen: HomeScreen, navigationOptions: {tabBarIcon: <Icon name="any"></Icon>}},
  Adicionar: {screen: HomeScreen, navigationOptions: {tabBarIcon: <Icon name="add"></Icon>}},
  undefined_2: {screen: HomeScreen, navigationOptions: {tabBarIcon: <Icon name="any"></Icon>}},
  Configurações: {screen: HomeScreen, navigationOptions: {tabBarIcon: <Icon name="settings"></Icon>}}
})
