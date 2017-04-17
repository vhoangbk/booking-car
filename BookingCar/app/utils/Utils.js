import {
  Alert,
  AsyncStorage,
} from 'react-native';

var Const = require('./Const')

module.exports = {
  showInfoMessage(message){
    Alert.alert(
      '',
      message,
      [
        {text: 'Đóng', onPress: () => {}},
      ],
      { cancelable: false }
    )
  },
  setToken(token){
    try {
      AsyncStorage.setItem(Const.KEY.KEY_TOKEN, token);
    } catch (error) {
    }
  },
  getToken(callback){
    try {
      AsyncStorage.getItem(Const.KEY.KEY_TOKEN, callback);
    } catch (error) {
    }
  }
};