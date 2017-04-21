import React from 'react';

var Utils = require('../utils/Utils')
var Const = require('../utils/Const')

import {
  Alert,
  NetInfo,
} from 'react-native';

module.exports = {
  postRequest(url, params, successCallback, errorCallback){
    console.log('[params]'+ ' '+ url +' ' +JSON.stringify(params))
    fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
          })
          .then((response)=> response.json())
          .then((success)=>{
            console.log('[success] '+JSON.stringify(success))
            if(success.success == true){
              successCallback(success)
            }else{
              Utils.showInfoMessage(success.message);
              errorCallback(success)
            }
          })
          .catch((error)=>{
            console.log('[error] '+error)
            Utils.showInfoMessage(Const.MESSAGE.ERROR_NETWORK);
            errorCallback(error)
          })
          .done()
  }
};