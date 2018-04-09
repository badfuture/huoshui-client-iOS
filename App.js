import React, { Component } from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import { Button, View } from 'react-native'
import { Root, Container, Header, Content, ActionSheet, Text } from "native-base"
import HomeScreen from './Home/HomeScreen'
import RankScreen from './Rank/RankScreen'
import ReviewScreen from './Review/ReviewScreen'
import KelistScreen from './Kelist/KelistScreen'
import SettingScreen from './Setting/SettingScreen'

console.disableYellowBox = true

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
})

const ReviewStack = StackNavigator({
  Review: { screen: ReviewScreen },
})

const RankStack = StackNavigator({
  Rank: { screen: RankScreen },
})

const KelistStack = StackNavigator({
  Kelist: { screen: KelistScreen },
})

const SettingStack = StackNavigator({
  Setting: { screen: SettingScreen },
})

const RootStack = TabNavigator(
  {
    Home: { screen: HomeStack },
    Rank: { screen: RankStack },
    Review: { screen: ReviewStack },
    Kelist: { screen: KelistStack },
    Setting: { screen: SettingStack },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-water${focused ? '' : '-outline'}`;
        } else if (routeName === 'Review') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Rank') {
          iconName = `ios-pie${focused ? '' : '-outline'}`;
        } else if (routeName === 'Kelist') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        } else if (routeName === 'Setting') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        // can return any icon here
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#65C0D3',
      inactiveTintColor: 'gray',
      showLabel: true,
      style: {
        marginBottom: 2
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  }
);

export default class App extends Component {
  render() {
    return (
      <Root>
        <RootStack />
      </Root>
    )
  }
}
