import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, TouchableHighlight } from 'react-native'

import RoundButton from './RoundButton'
var Strings = require('../utils/Strings')

let COLOR_607D8B_PRESS = '#607D8B70'

export default class BackButton extends React.Component {
  
  render(){
    return(
      <RoundButton title={Strings.BACK} onPress={this.props.onPress} underlayColor={COLOR_607D8B_PRESS} styleContainer={styles.styleContainer}></RoundButton>
    );
  }
  
 
}

const styles = StyleSheet.create({
  styleContainer:{
    left:20,
    top:40,
    position:'absolute',
  }
})