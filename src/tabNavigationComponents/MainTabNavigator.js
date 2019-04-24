import React from 'react';

import { Platform } from 'react-native';

import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IncomeScreen from '../incomeScreenComponents';
import PaymentScreen from '../paymentScreenComponents';
import JobScreen from '../jobScreenComponents';

const IncomeStack = createSwitchNavigator({
  Income: IncomeScreen,
});

IncomeStack.navigationOptions = {
 tabBarLabel: 'Income',

	tabBarIcon: ({ focused }) => (
    <FontAwesome
      focused={focused}
      name={"university"}
      size = {26}
    />
  ),
};


const PaymentStack = createSwitchNavigator({
  Payment: PaymentScreen,
});


PaymentStack.navigationOptions = {
  tabBarLabel: 'Payments',
  tabBarIcon: ({ focused }) => (
    <FontAwesome
      focused={focused}
      name={'credit-card'}
      size = {26}
    />
  ),
};

const JobStack = createSwitchNavigator({
    Job: JobScreen,
});

JobStack.navigationOptions = {
    tabBarLabel: 'Job Hours',
    tabBarIcon: ({focused}) => (
        <FontAwesome focused = {focused}
        name={'line-chart'}
        size={26}
        />
    )
}


export default createBottomTabNavigator({
  IncomeStack,
  PaymentStack,
  JobStack,
});
