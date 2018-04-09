import React, { Component } from "react"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Image } from 'react-native'
import { Container, Header, Content,
ListItem, CheckBox,
  Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Badge } from 'native-base';

const avatar = "../images/avatar/male.png"
const image = "../images/pattern/pattern1.jpg"

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '活水',
  }

  render() {
    return (
      <Container>
        <Content>
          <Button bordered>
            <Text>Primary</Text>
          </Button>
          <Button bordered danger>
            <Text>Danger</Text>
          </Button>

          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: "../images/avatar/male.png"}} />
                <Body>
                  <Text>课程综合榜</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "./backup1.jpg"}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
