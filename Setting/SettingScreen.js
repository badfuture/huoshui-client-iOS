import React, { Component } from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, View } from 'react-native'
import { Root, Container, Header, Content, ActionSheet, Text } from "native-base"

export default class SettingScreen extends Component {
  static navigationOptions = {
    title: '我的',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>我的设置</Text>
        <Button
          title="活水主页"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
