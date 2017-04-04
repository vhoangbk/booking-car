import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

var Const = require('../utils/Const')
var Utils = require('../utils/Utils')

export default class LoginScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
    }
  }
  
  render(){
    return(
      <View style={styles.container}>
        {/* button back */} 
        <TouchableHighlight style={styles.button_back} onPress={this.pressBack.bind(this)} underlayColor={Const.COLOR.COLOR_607D8B_PRESS}>
          <Text style={styles.button_back_title}>Trở lại</Text>
        </TouchableHighlight>
        
        <TextInput style={styles.input_username} placeholder='Tên đăng nhập'
            returnKeyType='next'
            autoCapitalize='none'
            onSubmitEditing={()=>{this.passwordInput.focus()}}
            onChangeText={(user)=>{this.setState({username : user.trim()})}}
            autoCorrect={false}>
        </TextInput>
        <TextInput style={styles.input_password} placeholder='Mật khẩu' secureTextEntry
          returnKeyType='done'
          autoCorrect={false}
          ref={(input)=>{this.passwordInput = input}}
          autoCapitalize='none'
          value={this.state.password}
          onChangeText={(pass)=>{this.setState({password : pass.trim()})}}>
        </TextInput>
        <TouchableHighlight style={styles.button_login} onPress={this.pressLogin.bind(this)} underlayColor={Const.COLOR.COLOR_2E7D32_PRESS}>
          <Text style={styles.button_title}>Đăng nhập</Text>
        </TouchableHighlight>

      </View>
    )
  }
  
  pressBack(){
    this.props.navigator.pop();
  }

  pressLogin(){
    if('' == this.state.username){
      Utils.showInfoMessage(Const.MESSAGE.USERNAME_EMPTY);
      return;
    }
    if('' == this.state.password){
      Utils.showInfoMessage(Const.MESSAGE.PASSWORD_EMPTY);
      return;
    }
    this.props.navigator.push({ title: 'login_success', index: Const.SCREEN.LOGIN_SUCESS_SCREEN });
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  button_back:{
    backgroundColor:Const.COLOR.COLOR_607D8B,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:5,
    left:20,
    top:40,
    position:'absolute',
  },
  button_back_title:{
    fontSize:17,
    fontWeight: 'bold',
    color:'white',
  },
  input_username:{
    borderColor: 'gray', 
    borderWidth: 1,
    height:50,
    marginLeft:30,
    marginRight:30,
    borderRadius:5,
    paddingLeft:5,
    paddingRight:5,
    fontSize:20,
  },
  input_password:{
    borderColor: 'gray', 
    borderWidth: 1,
    height:50,
    marginLeft:30,
    marginRight:30,
    borderRadius:5,
    paddingLeft:5,
    paddingRight:5,
    fontSize:20,
    marginTop:20,
  },
  button_login:{
    backgroundColor:Const.COLOR.COLOR_0277BD,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:5,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    width:Dimensions.get('window').width - 60,
  },
  button_title:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white',
  },
})