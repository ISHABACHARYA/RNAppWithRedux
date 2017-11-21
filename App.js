import React, { Component } from "react";
import StackNav from './src/router/stackNav';
import { Root } from "native-base";
import { Provider } from "react-redux";
import reducer from "./src/reducer/";
import {createStore} from 'redux';
import {StatusBar} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Provider  store={createStore(reducer)}>
        <Root>
          <StatusBar
          hidden
          />
          <StackNav />
        </Root>
      </Provider>
    );
  }
}
