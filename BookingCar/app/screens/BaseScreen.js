import React, { Component } from 'react';
import {
  NetInfo,
  AsyncStorage,
} from 'react-native'

export default class BaseScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isInternetConnected:false,
      token:'',
    }
    
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({ 
        isInternetConnected:isConnected,
      });
    });
    
  }
  
  componentDidMount() {
    NetInfo.addEventListener(
        'change',
        this.handleConnectionInfoChange.bind(this)
    );
    
  }
  
  componentWillUnmount() {
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