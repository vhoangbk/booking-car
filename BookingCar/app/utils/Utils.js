import {
  Alert,
} from 'react-native';

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
  }
};