import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

import RoundButton from './RoundButton'
var Strings = require('../utils/Strings')

export default class LogoutButton extends React.Component {
  
  render(){
    return(
      <RoundButton title={Strings.LOGOUT} onPress={this.props.onPress} underlayColor='#607D8B70' styleContainer={styles.styleContainer}></RoundButton>
    );
  }
  
 
}

const styles = StyleSheet.create({
  styleContainer:{
    right:20,
    top:40,
    position:'absolute',
  }
})