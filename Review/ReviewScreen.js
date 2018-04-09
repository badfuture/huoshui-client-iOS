import React, { Component } from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button, View } from 'react-native'
import { Root, Container, Header, Content, ActionSheet, Text } from "native-base"

export default class ReviewScreen extends React.Component {
  static navigationOptions = {
    title: '点评',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>点评</Text>
        <Button
          title="Go to Rank"
          onPress={() => {
            this.props.navigation.navigate('Rank', {
              customParam: 86,
            })
          }}
        />
      </View>
    )
  }
}
