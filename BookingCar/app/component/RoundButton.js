import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

export default class RoundButton extends React.Component {
    
  render(){
    return(
      <TouchableHighlight style={[styles.button_container, this.props.styleContainer]} onPress={this.props.onPress} underlayColor={this.props.underlayColor}>
        <Text style={[styles.button_title, this.props.styleTitle]}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
  
 
}

const styles = StyleSheet.create({
  button_container:{
    backgroundColor:'#607D8B',
    borderRadius:5,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
  },
  button_title:{
    fontSize:17,
    fontWeight: 'bold',
    color:'white',
  },
})