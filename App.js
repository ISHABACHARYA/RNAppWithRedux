import React, { Component } from "react";
import SignUp from "./src/components/SignUp";
import { Root } from "native-base";
import { Provider } from "react-redux";
import reducer from "./src/reducer/";
import {createStore} from 'redux';

export default class App extends Component {
  render() {
    return (
      <Provider  store={createStore(reducer)}>
        <Root>
          <SignUp />
        </Root>
      </Provider>
    );
  }
}
