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
  Icon,
  Toast,
  Body
} from "native-base";
import { Text } from "react-native";
import { connect } from "react-redux";
import { email_changed, password_changed } from "../action";

class SignUp extends React.Component {
  constructor() {
    super();
  }

  _update = (value, type) => {
    if (type === "email") {
      Toast.show({
        text: "email Edited",
        position: "bottom",
        buttonText: "ok !",
        type: "success"
      });
      this.props.email_changed(value);
    } else if (type === "password") {
      Toast.show({
        text: "password Edited",
        position: "top",
        buttonText: "ok !",
        type: "warning"
      });
      this.props.password_changed(value);
    }
  };
  _navigateToHome(){
    if (this.props.email == '' || this.props.password == '')
    Toast.show({
      text: "Field cannot be Empty",
      type: "danger",
      position: "top",
      buttonText: "okay"
    })
    else{
      this.props.navigation.navigate('home')
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text style={{fontWeight:'bold', fontSize: 18}}> SignUp</Text>
          </Body>
          </Header>
        <Content>
          <Form>
            <Item floatingLabel underline success>
              <Label>Username</Label>
              <Input
                onChangeText={x => this._update(x, "email")}
                value={this.props.email}
              />
            </Item>
            <Item floatingLabel underline success>
              <Label> Password</Label>
              <Input
                secureTextEntry
                onChangeText={x => this._update(x, "password")}
                value={this.props.password}
              />
            </Item>
            <Button
              full
              style={{ marginTop: 10 }}
              onPress={() =>  this._navigateToHome()}
            >
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
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};
const mapDispatchToProps = state => {
  return {
    email_changed: email_changed,
    password_changed: password_changed,
  };
};

export default connect(mapStateToProps, {email_changed, password_changed})(SignUp);
