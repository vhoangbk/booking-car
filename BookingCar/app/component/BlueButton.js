import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions, } from 'react-native'

import RoundButton from './RoundButton'

export default class BlueButton extends React.Component {
  
  render(){
    return(
      <RoundButton 
        title={this.props.title} 
        onPress={this.props.onPress} 
        underlayColor='#0277BD70' 
        styleContainer={[styles.styleContainer, this.props.style]} 
        styleTitle={styles.styleTitle}>
      </RoundButton>
    );
  }
  
 
}

const styles = StyleSheet.create({
  styleContainer:{
    backgroundColor:'#0277BD',
    paddingTop:15,
    paddingBottom:15,
    justifyContent:'center',
    alignItems:'center',
    width:Dimensions.get('window').width-60,
    borderRadius:5,
  },
  styleTitle:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white',
  },
})