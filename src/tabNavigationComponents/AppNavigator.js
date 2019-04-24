import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import IncomeScreen from '../incomeScreenComponents';
import PaymentScreen from '../paymentScreenComponents';
import JobScreen from '../jobScreenComponents';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Income:IncomeScreen,
  Payment:PaymentScreen,
  Job:JobScreen
}));