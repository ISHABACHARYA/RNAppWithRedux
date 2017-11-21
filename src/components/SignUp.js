import React from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Label,
  Icon ,
  Toast
} from "native-base";
import { Text } from "react-native";
import {connect} from 'react-redux';
import {email_changed} from '../action/auth';

 class SignUp extends React.Component {
    constructor(){
        super();
        this.state={email:'', password:''}
    }
    _update=(value,type)=>{
        if(type === 'email'){
            Toast.show({text:'email Edited', position:'bottom', buttonText :'ok !', type: 'success'})
            this.props.email_changed(text)
          }
        else if(type === 'password'){
        Toast.show({text:'email Edited', position:'top', buttonText :'ok !', type: 'warning'})        
        this.setState({password: value})
        }
    }
  render() {
    return (
      <Container>
        <Header placeholder="SignUp" />
        <Content>
          <Form>
            <Item floatingLabel underline  success>
              <Label> 
              Username
              </Label>
              <Input onChangeText={(x)=> this._update(x,'email')}/>
            </Item>
            <Item floatingLabel underline success >
            <Label> Password</Label>
              <Input secureTextEntry onChangeText={(x)=>this._update(x,'password')}/>
            </Item>
            <Button full style={{marginTop:10}} onPress={()=>Toast.show({
                text:'Incorrect Password',
                position: 'bottom',
                buttonText: 'okay'
            })}>
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
                Sign Up
              </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default connect(null, {email_changed})(SignUp);