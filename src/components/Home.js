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
            <Text style={{fontWeight: 'bold', fontSize: 18, color:'#fff'}}>  Hamro Pasal </Text>
          </Body>
          <Right />
        </Header>
        <Content style={{paddingHorizontal:10, backgroundColor: '#ddd'}}>
            <Button 
            style={{backgroundColor: 'green',marginTop:36 }} 
            block 
            rounded
            onPress={()=> this.props.navigation.navigate('sell')}
            >
                <Icon name='cart' style={{color:'#fff'}}/>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:'#fff'}}> Sell Item </Text>
            </Button>

            <Button style={{backgroundColor: '#B388FF', marginTop:36}} block rounded>
                <Icon name='flame' style={{color:'#fff'}}/>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:'#fff'}}> Latest Item </Text>
            </Button>

            <Button style={{backgroundColor: '#6A1B9A',marginTop:36 }} block rounded>
                <Icon name='return-left' style={{color:'#fff'}}/>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:'#fff'}}> Return Item </Text>
            </Button>

            <Button style={{backgroundColor: '#FF80AB', marginTop:36}} block rounded>
                <Icon name='briefcase' style={{color:'#fff'}}/>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:'#fff'}}> Big Sell</Text>
            </Button>

            <Button style={{backgroundColor: '#FF8A80',marginTop:36 }} block rounded>
                <Icon name='pricetags' style={{color:'#fff'}}/>
                <Text style={{fontWeight: 'bold', fontSize: 18, color:'#fff'}}> Sale Sale  </Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default Home = DrawerNavigator({
    home:
     {
         screen: MainHome,        
    },

})