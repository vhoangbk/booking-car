// import React, { Component } from 'react';
import {
  Alert,
} from 'react-native';

// export default class Utils extends Component {

// }

module.exports = {
  showInfoMessage(message){
    Alert.alert(
      '',
      message,
      [
        {text: 'OK', onPress: () => {console.log('OK Pressed')}},
      ],
      { cancelable: false }
    )
  }
};