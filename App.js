import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Income"
          onPress={() => this.props.navigation.navigate('Income')}
        />
        <Button
          title="Payments"
          onPress={() => this.props.navigation.navigate('Payments')}
        />
        <Button
          title="Job Hours"
          onPress={() => this.props.navigation.navigate('Job_Hours')}
        />
        <Button
          title="Summary"
          onPress={() => this.props.navigation.navigate('Summary')}
        />
      </View>
    );
  }
}

class IncomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Income: IncomeScreen,
    Payments:PaymentsScreen,
    Job_Hours:JobHoursScreen,
    Summary:SummaryScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
