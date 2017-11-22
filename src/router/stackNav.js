import React from 'react';
import {
StackNavigator
} from 'react-navigation';
import Login from '../components/SignUp';
import Home from '../components/Home';
import Sale from '../components/Sale';

export default StackNav =StackNavigator({
    login: {screen:Login},
    home: {screen: Home},
    sell: {screen: Sale}
},
{
    headerMode: 'none'
}
)