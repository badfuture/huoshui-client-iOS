import React, { Component } from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, View } from 'react-native'
import { Root, Container, Header, Content, ActionSheet, Text } from "native-base"


export default class KelistScreen extends React.Component {
  static navigationOptions = {
    title: '课列',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>课列</Text>
        <Button
          title="课列"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
