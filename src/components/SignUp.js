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
  Icon 
} from "native-base";
import { Text } from "react-native";
export default class SignUp extends React.Component {
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
              <Input />
            </Item>
            <Item floatingLabel underline error={'red'} success>
            <Label> Password</Label>
              <Input secureTextEntry/>
            </Item>
            <Button full style={{marginTop:10}}>
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
