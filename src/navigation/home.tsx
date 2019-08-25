import HomeScreen from '../view/home';
import SettingsScreen from '../view/settings';
import ChartScreen from '../view/chart';
import NoPage from '../view/no_page';
import { Icon } from 'react-native-elements';
import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import i18n from 'i18n-js';

export const homeNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen, navigationOptions: {tabBarIcon: <Icon name="home"></Icon>, tabBarLabel: i18n.t('navigation.home')}}, 
  undefined: {screen: NoPage, navigationOptions: {tabBarIcon: <Icon name="add"></Icon>, tabBarLabel: i18n.t('navigation.undefined')}},
  undefined_2: {screen: NoPage, navigationOptions: {tabBarIcon: <Icon name="add"></Icon>, tabBarLabel: i18n.t('navigation.undefined')}},
  Charts: {screen: ChartScreen, navigationOptions: {tabBarIcon: <Icon name="show-chart"></Icon>, tabBarLabel: i18n.t('navigation.charts')}},
  Settings: { screen: SettingsScreen, navigationOptions: {tabBarIcon: <Icon name="settings"></Icon>, tabBarLabel: i18n.t('navigation.settings')}}
})
