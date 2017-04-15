import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, TouchableHighlight } from 'react-native'

import RoundButton from './RoundButton'
var Strings = require('../utils/Strings')

let COLOR_607D8B_PRESS = '#607D8B70'

export default class LogoutButton extends React.Component {
  
  render(){
    return(
      <RoundButton title={Strings.LOGOUT} onPress={this.props.onPress} underlayColor={COLOR_607D8B_PRESS} styleContainer={styles.styleContainer}></RoundButton>
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