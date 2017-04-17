import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight,Platform } from 'react-native'

import RoundButton from './RoundButton'
var Strings = require('../utils/Strings')

export default class BackButton extends React.Component {
  
  render(){
    return(
      <RoundButton title={Strings.BACK} onPress={this.props.onPress} underlayColor='#607D8B70' styleContainer={styles.styleContainer}></RoundButton>
    );
  }
  
 
}

const styles = StyleSheet.create({
  styleContainer:{
    left:20,
    top:(Platform.OS === 'ios') ? 40 : 20,
    position:'absolute',
  }
})