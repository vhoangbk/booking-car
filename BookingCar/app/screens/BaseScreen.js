import React, { Component } from 'react';
import {
  NetInfo,
  AsyncStorage,
  BackAndroid,
} from 'react-native'

// var Const = require('./app/utils/Const')

export default class LoginScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isInternetConnected:false,
      token:'',
      main:false,
    }
    
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ 
        isInternetConnected:isConnected,
      });
    });
    
    BackAndroid.addEventListener('hardwareBackPress', ()=>{
      this.props.navigator.pop();
      return !this.state.main;
    });
    
    
    
  }
  
  componentDidMount() {
    console.log('componentDidMount')
    NetInfo.addEventListener(
        'change',
        this.handleConnectionInfoChange.bind(this)
    );
    this.setState({
      main:false,
    })
    
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount')
    NetInfo.removeEventListener(
        'change',
        this.handleConnectionInfoChange.bind(this)
    );
  }
  
  handleConnectionInfoChange(connected){
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ 
        isInternetConnected:isConnected,
      });
    });
  };
  
}