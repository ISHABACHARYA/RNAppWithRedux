import React from 'react';
import {
StackNavigator
} from 'react-navigation';
import Login from '../components/SignUp';
import Home from '../components/Home';

export default StackNav =StackNavigator({
    login: {screen:Login},
    home: {screen: Home}
},
{
    headerMode: 'none'
}
)