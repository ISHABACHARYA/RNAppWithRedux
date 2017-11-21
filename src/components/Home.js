import React from "react";
import { Container, Header, Content, Body, Left,Right, Icon, Button } from "native-base";
import {Text} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

 class MainHome extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#2979FF'}}>
          <Left>
              <Button onPress={()=> this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='more' active style={{color: '#fff'}}/>
              </Button>
          </Left>
          <Body>
            <Text style={{fontWeight: 'bold', fontSize: 18, color:'#fff'}}>  Home </Text>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default Home = DrawerNavigator({
    home: {screen: MainHome},

})